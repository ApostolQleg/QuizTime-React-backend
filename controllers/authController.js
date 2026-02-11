import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import TempCode from "../models/TempCode.js";
import { verifyGoogleToken } from "../utils/googleClient.js";
import { sendVerificationEmail } from "../utils/emailService.js";

// Registration logic
export const register = async (req, res) => {
	try {
		const { name, email, password, avatarUrl, code, googleToken } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ error: "Nickname, email and password are required" });
		}

		const existingNick = await User.findOne({ name });
		if (existingNick) {
			return res.status(409).json({ error: "Nickname already taken" });
		}

		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return res.status(409).json({ error: "User with this email already exists" });
		}

		let googleId = null;
		let finalAvatarUrl = avatarUrl;

		if (googleToken) {
			const payload = await verifyGoogleToken(googleToken);

			if (payload.email !== email) {
				return res
					.status(400)
					.json({ error: "Google email does not match provided email" });
			}

			googleId = payload.sub;
			if (!finalAvatarUrl) finalAvatarUrl = payload.picture;
		} else {
			if (!code) {
				return res.status(400).json({ error: "Verification code is required" });
			}

			const record = await TempCode.findOne({ email });
			if (!record) {
				return res
					.status(400)
					.json({ error: "Verification code expired or not found. Please try again." });
			}

			if (record.code !== code.trim()) {
				return res.status(400).json({ error: "Invalid verification code" });
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
		res.status(201).json({ ok: true, user: userData, token });
	} catch (error) {
		console.error("Register error:", error);
		res.status(500).json({ error: "Registration failed" });
	}
};

// Login logic
export const login = async (req, res) => {
	try {
		const { login, password } = req.body;

		const user = await User.findOne({ name: login });

		if (!user) return res.status(404).json({ error: "User not found" });

		const isValidPass = await bcrypt.compare(password, user.passwordHash);
		if (!isValidPass) return res.status(400).json({ error: "Invalid password" });

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
		const { passwordHash: _, ...userData } = user.toObject();
		res.json({ ok: true, user: userData, token });
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "Login failed" });
	}
};

// Google authentication logic
export const googleAuth = async (req, res) => {
	try {
		const { token } = req.body;

		const payload = await verifyGoogleToken(token);
		const email = payload.email;

		let user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		if (!user.googleId) {
			user.googleId = payload.sub;
			await user.save();
		}

		const appToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
		res.json({ ok: true, user: user.toObject(), token: appToken });
	} catch (error) {
		console.error("Google Auth Error:", error);
		res.status(500).json({ error: "Google login failed" });
	}
};

// Google token extraction logic (for registration)
export const googleExtract = async (req, res) => {
	try {
		const { token } = req.body;

		const payload = await verifyGoogleToken(token);
		const { name, email, picture, sub } = payload;

		res.json({ ok: true, email, name, picture, googleId: sub });
	} catch (error) {
		console.error("Google Extract Error:", error);
		res.status(500).json({ error: "Invalid Google Token" });
	}
};

// Send verification code logic
export const sendCode = async (req, res) => {
	try {
		const { email } = req.body;
		if (!email) return res.status(400).json({ error: "Email is required" });

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ error: "User with this email already exists" });
		}

		const code = Math.floor(100000 + Math.random() * 900000).toString();

		await TempCode.findOneAndUpdate(
			{ email },
			{ code, createdAt: new Date() },
			{ upsert: true, new: true, setDefaultsOnInsert: true },
		);

		await sendVerificationEmail(email, code);

		res.json({ ok: true, message: "Code sent" });
	} catch (error) {
		console.error("Send code error:", error);
		res.status(500).json({ error: "Failed to send verification code" });
	}
};
