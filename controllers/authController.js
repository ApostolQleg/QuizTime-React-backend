import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import TempCode from "../models/TempCode.js";
import { verifyGoogleToken } from "../utils/googleClient.js";
import { sendVerificationEmail } from "../utils/emailService.js";

// Registration logic
export const register = async (request, reply) => {
	try {
		const { name, email, password, avatarUrl, code, googleToken } = request.body;

		if (!name || !email || !password) {
			return reply.code(400).send({ error: "Nickname, email and password are required" });
		}

		const existingNick = await User.findOne({ name });
		if (existingNick) {
			return reply.code(409).send({ error: "Nickname already taken" });
		}

		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return reply.code(409).send({ error: "User with this email already exists" });
		}

		let googleId = null;
		let finalAvatarUrl = avatarUrl;

		if (googleToken) {
			const payload = await verifyGoogleToken(googleToken);

			if (payload.email !== email) {
				return reply
					.code(400)
					.send({ error: "Google email does not match provided email" });
			}

			googleId = payload.sub;
			if (!finalAvatarUrl) finalAvatarUrl = payload.picture;
		} else {
			if (!code) {
				return reply.code(400).send({ error: "Verification code is required" });
			}

			const record = await TempCode.findOne({ email });
			if (!record) {
				return reply
					.code(400)
					.send({ error: "Verification code expired or not found. Please try again." });
			}

			if (record.code !== code.trim()) {
				return reply.code(400).send({ error: "Invalid verification code" });
			}

			await TempCode.deleteOne({ email });
		}

		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(password, salt);

		const user = new User({
			name,
			email,
			passwordHash,
			avatarUrl: finalAvatarUrl,
			googleId,
		});

		await user.save();

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
		const { passwordHash: _, ...userData } = user.toObject();
		reply.code(201).send({ ok: true, user: userData, token });
	} catch (error) {
		console.error("Register error:", error);
		reply.code(500).send({ error: "Registration failed" });
	}
};

// Login logic
export const login = async (request, reply) => {
	try {
		const { login, password } = request.body;

		const user = await User.findOne({ name: login });

		if (!user) return reply.code(404).send({ error: "User not found" });

		const isValidPass = await bcrypt.compare(password, user.passwordHash);
		if (!isValidPass) return reply.code(400).send({ error: "Invalid password" });

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
		const { passwordHash: _, ...userData } = user.toObject();
		reply.send({ ok: true, user: userData, token });
	} catch (error) {
		console.error("Login error:", error);
		reply.code(500).send({ error: "Login failed" });
	}
};

// Google authentication logic
export const googleAuth = async (request, reply) => {
	try {
		const { token } = request.body;

		const payload = await verifyGoogleToken(token);
		const { email, sub, picture } = payload;

		let user = await User.findOne({ email });

		if (!user) {
			return reply.code(404).send({ error: "User not found" });
		}

		let hasChanges = false;

		if (!user.googleId) {
			user.googleId = sub;
			hasChanges = true;
		}

		if (!user.avatarUrl && picture) {
			user.avatarUrl = picture;
			user.avatarType = "google";
			hasChanges = true;
		}

		if (hasChanges) {
			await user.save();
		}

		const appToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
		reply.send({ ok: true, user: user.toObject(), token: appToken });
	} catch (error) {
		console.error("Google Auth Error:", error);
		reply.code(500).send({ error: "Google login failed" });
	}
};

// Google token extraction logic (for registration)
export const googleExtract = async (request, reply) => {
	try {
		const { token } = request.body;

		const payload = await verifyGoogleToken(token);
		const { name, email, picture, sub } = payload;

		console.log("Searching for user with email:", email);
		const existingUser = await User.findOne({ email });
		console.log("Found user:", existingUser);

		if (existingUser) {
			return reply.code(409).send({ error: "User with this email already exists" });
		}

		reply.send({ ok: true, email, name, picture, googleId: sub });
	} catch (error) {
		console.error("Google Extract Error:", error);
		reply.code(500).send({ error: "Invalid Google Token" });
	}
};

// Send verification code logic
export const sendCode = async (request, reply) => {
	try {
		const { email } = request.body;
		if (!email) return reply.code(400).send({ error: "Email is required" });

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return reply.code(409).send({ error: "User with this email already exists" });
		}

		const code = Math.floor(100000 + Math.random() * 900000).toString();

		await TempCode.findOneAndUpdate(
			{ email },
			{ code, createdAt: new Date() },
			{ upsert: true, new: true, setDefaultsOnInsert: true },
		);

		await sendVerificationEmail(email, code);

		reply.send({ ok: true, message: "Code sent" });
	} catch (error) {
		console.error("Send code error:", error);
		reply.code(500).send({ error: "Failed to send verification code" });
	}
};

// Link Google account logic
export const linkGoogle = async (request, reply) => {
	try {
		const userId = request.userId;

		const { token } = request.body;

		const payload = await verifyGoogleToken(token);
		const { sub, picture } = payload;

		const existingGoogleUser = await User.findOne({ googleId: sub });
		if (existingGoogleUser && String(existingGoogleUser._id) !== String(userId)) {
			return reply
				.code(409)
				.send({ error: "This Google account is already linked to another user" });
		}

		const user = await User.findById(userId);
		if (!user) return reply.code(404).send({ error: "User not found" });

		user.googleId = sub;

		if (!user.avatarUrl) {
			user.avatarUrl = picture;
			user.avatarType = "google";
		}

		await user.save();

		const { passwordHash, ...userData } = user.toObject();
		reply.send({ ok: true, user: userData });
	} catch (error) {
		console.error("Link Google Error:", error);
		reply.code(500).send({ error: "Failed to link Google account" });
	}
};
