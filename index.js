import express from "express";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { defaultQuizzes } from "./data/defaultQuizzes.js";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const app = express();
const PORT = process.env.PORT || 3000;

// --- OPTIMIZATION START ---
let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			maxPoolSize: 10,
		};

		cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
			console.log("✅ New MongoDB connection established");
			return mongoose;
		});
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}

	return cached.conn;
}
// --- OPTIMIZATION END ---
app.use(async (req, res, next) => {
	try {
		await connectToDatabase();
		next();
	} catch (error) {
		console.error("Database connection failed:", error);
		res.status(500).json({ error: "Database connection failed" });
	}
});

// Middleware for token verification
const checkAuth = (req, res, next) => {
	const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			if (!decoded._id) {
				console.error("Token missing _id:", decoded);
				return res.status(403).json({ error: "Invalid token structure" });
			}

			req.userId = decoded._id;
			next();
		} catch (e) {
			console.error("Token verification failed:", e);
			return res.status(403).json({ error: "No access" });
		}
	} else {
		return res.status(403).json({ error: "No access" });
	}
};

// user schema
const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		passwordHash: { type: String, required: true },
		avatarUrl: String,
		googleId: String,
	},
	{ versionKey: false },
);

const User = mongoose.model("User", userSchema, "users");

// quiz schema
const quizSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		id: String,
		questions: Array,
		authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		authorName: String,
	},
	{ versionKey: false },
);

const Quiz = mongoose.model("Quiz", quizSchema, "quizzes");

// result schema
const resultSchema = new mongoose.Schema(
	{
		quizId: { type: String, required: true, index: true },
		quizTitle: { type: String, required: true },
		timestamp: { type: Number, required: true },
		summary: {
			score: Number,
			correct: Number,
			total: Number,
		},
		answers: { type: Array, required: true },
		questions: { type: Array, required: true },

		userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true, required: true },
		createdAt: { type: Date, default: Date.now, index: true },
	},
	{ versionKey: false },
);

const Result = mongoose.model("Result", resultSchema, "results");

// temp code schema for password reset
const tempCodeSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		code: { type: String, required: true },
		createdAt: { type: Date, default: Date.now, expires: 300 },
	},
	{ versionKey: false },
);

const TempCode = mongoose.model("TempCode", tempCodeSchema, "temp_codes");

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

// seed database logic
async function checkAndSeedDatabase() {
	try {
		const count = await Quiz.countDocuments();
		if (count === 0) {
			await Quiz.insertMany(defaultQuizzes.quizzes);
			console.log("✅ Default quizzes seeded");
		}
	} catch (error) {
		console.error("Seeding error:", error);
	}
}

app.use(
	cors({
		origin: ["https://quiz-time-with-react.vercel.app", "http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);

app.use(express.json());

// --- AUTH ROUTES ---

app.post("/auth/register", async (req, res) => {
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
			const ticket = await client.verifyIdToken({
				idToken: googleToken,
				audience: process.env.GOOGLE_CLIENT_ID,
			});
			const payload = ticket.getPayload();

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
});

app.post("/auth/login", async (req, res) => {
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
});

app.post("/auth/google", async (req, res) => {
	try {
		const { token } = req.body;
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const { email } = ticket.getPayload();

		let user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		if (!user.googleId) {
			user.googleId = ticket.getPayload().sub;
			await user.save();
		}

		const appToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
		res.json({ ok: true, user: user.toObject(), token: appToken });
	} catch (error) {
		console.error("Google Auth Error:", error);
		res.status(500).json({ error: "Google login failed" });
	}
});

app.post("/auth/google-extract", async (req, res) => {
	try {
		const { token } = req.body;
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const { name, email, picture, sub } = ticket.getPayload();

		res.json({ ok: true, email, name, picture, googleId: sub });
	} catch (error) {
		console.error("Google Extract Error:", error);
		res.status(500).json({ error: "Invalid Google Token" });
	}
});

app.post("/auth/send-code", async (req, res) => {
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

		await transporter.sendMail({
			from: `"QuizTime" <${process.env.SMTP_USER}>`,
			to: email,
			subject: "Your Verification Code",
			html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Welcome to QuizTime!</h2>
                    <p>Your verification code is:</p>
                    <h1 style="color: #4CAF50; letter-spacing: 5px;">${code}</h1>
                    <p>This code expires in 5 minutes.</p>
                </div>
            `,
		});

		res.json({ ok: true, message: "Code sent" });
	} catch (error) {
		console.error("Send code error:", error);
		res.status(500).json({ error: "Failed to send verification code" });
	}
});

// --- QUIZ ROUTES ---

app.get("/api/quizzes", async (req, res) => {
	try {
		await checkAndSeedDatabase();

		const limit = parseInt(req.query.limit) || 36;
		let skip = parseInt(req.query.skip);

		if (isNaN(skip)) {
			const page = parseInt(req.query.page) || 1;
			skip = (page - 1) * limit;
		}

		const quizzes = await Quiz.find()
			.sort({ _id: -1 })
			.skip(skip)
			.limit(limit)
			.select("id title description questions authorId authorName");

		const mappedQuizzes = quizzes.map((q) => ({
			_id: q._id,
			id: q.id,
			title: q.title,
			description: q.description,
			authorId: q.authorId,
			authorName: q.authorName,
			questionsCount: q.questions.length,
		}));

		res.json(mappedQuizzes);
	} catch (error) {
		console.error("Error fetching quizzes:", error);
		res.status(500).json({ error: "Failed to fetch quizzes" });
	}
});

app.post("/api/quizzes", checkAuth, async (req, res) => {
	try {
		const { id, title, description, questions } = req.body;
		if (!id || !title || !Array.isArray(questions)) {
			return res.status(400).json({ error: "Invalid payload" });
		}
		const exists = await Quiz.findOne({ id });
		if (exists) return res.status(409).json({ error: "Quiz with this id already exists" });

		const user = await User.findById(req.userId);
		if (!user) return res.status(404).json({ error: "Author not found" });

		const quiz = new Quiz({
			id: String(id),
			title,
			description,
			questions,
			authorId: req.userId,
			authorName: user.name,
		});
		await quiz.save();
		res.status(201).json({ ok: true, quiz });
	} catch (error) {
		console.error("Create quiz error:", error);
		res.status(500).json({ error: "Failed to create quiz" });
	}
});

app.get("/api/quizzes/:id", async (req, res) => {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id });
		if (!quiz) return res.status(404).json({ error: "Quiz not found" });
		res.json(quiz);
	} catch (error) {
		console.error("Fetch quiz error:", error);
		res.status(500).json({ error: "Failed to fetch quiz" });
	}
});

app.put("/api/quizzes/:id", checkAuth, async (req, res) => {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id });
		if (!quiz) return res.status(404).json({ error: "Quiz not found" });

		if (!quiz.authorId) return res.status(403).json({ error: "Cannot edit system quizzes" });

		if (String(quiz.authorId) !== String(req.userId)) {
			return res.status(403).json({ error: "You are not the author" });
		}

		const updates = {};
		const { title, description, questions } = req.body;
		if (title !== undefined) updates.title = title;
		if (description !== undefined) updates.description = description;
		if (questions !== undefined) {
			if (!Array.isArray(questions))
				return res.status(400).json({ error: "Questions must be an array" });
			updates.questions = questions;
		}
		const updatedQuiz = await Quiz.findOneAndUpdate(
			{ id: req.params.id },
			{ $set: updates },
			{ new: true },
		);
		res.json({ ok: true, quiz: updatedQuiz });
	} catch (error) {
		console.error("Update quiz error:", error);
		res.status(500).json({ error: "Failed to update quiz" });
	}
});

app.delete("/api/quizzes/:id", checkAuth, async (req, res) => {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id });
		if (!quiz) return res.status(404).json({ error: "Quiz not found" });

		if (!quiz.authorId) return res.status(403).json({ error: "Cannot delete system quizzes" });

		if (String(quiz.authorId) !== String(req.userId)) {
			return res.status(403).json({ error: "You are not the author" });
		}
		await Quiz.findOneAndDelete({ id: req.params.id });
		res.json({ ok: true });
	} catch (error) {
		console.error("Delete quiz error:", error);
		res.status(500).json({ error: "Failed to delete quiz" });
	}
});

// --- RESULT ROUTES (UPDATED) ---

// Get User Results (Filtered by userId)
app.get("/api/results", checkAuth, async (req, res) => {
	try {
		if (!req.userId) {
			return res.status(400).json({ error: "User ID missing" });
		}

		const results = await Result.find({ userId: req.userId })
			.select("-questions")
			.sort({ createdAt: -1 })
			.lean();
		res.json(results);
	} catch (error) {
		console.error("Error fetching results:", error);
		res.status(500).json({ error: "Failed to fetch results" });
	}
});

// Save Result
app.post("/api/results", checkAuth, async (req, res) => {
	try {
		const { quizId, answers, summary, timestamp } = req.body;
		if (!quizId || !answers || !summary || !timestamp) {
			return res.status(400).json({ error: "Invalid payload" });
		}
		const quiz = await Quiz.findOne({ id: String(quizId) }).lean();
		if (!quiz) return res.status(404).json({ error: "Quiz not found" });

		const result = new Result({
			quizId,
			quizTitle: quiz.title,
			timestamp,
			summary,
			answers,
			questions: quiz.questions,
			userId: req.userId,
		});

		await result.save();
		res.status(201).json({ ok: true, resultId: result._id });
	} catch (error) {
		console.error("Save result error:", error);
		res.status(500).json({ error: "Failed to save result" });
	}
});

app.get("/api/results/:id", checkAuth, async (req, res) => {
	try {
		const result = await Result.findById(req.params.id).lean();
		if (!result) return res.status(404).json({ error: "Result not found" });
		res.json(result);
	} catch (error) {
		console.error("Fetch result error:", error);
		res.status(500).json({ error: "Failed to fetch result" });
	}
});

export default app;

if (process.env.NODE_ENV !== "production") {
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
