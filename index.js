import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { defaultQuizzes } from "./default-quizzes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
	.connect(process.env.MONGO_URI)
	.then(async () => {
		console.log("✅ Connected to MongoDB");
		await seedDatabase();
	})
	.catch((err) => console.error("❌ MongoDB connection error:", err));

// quiz schema
const quizSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		id: String,
		questions: Array,
	},
	{ versionKey: false },
);

const Quiz = mongoose.model("Quiz", quizSchema, "quizzes");

app.use(
	cors({
		origin: ["https://quiz-time-with-react.vercel.app", "http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
	}),
);

app.use(express.json());

// seed database if empty
async function seedDatabase() {
	try {
		const count = await Quiz.countDocuments();
		if (count === 0) {
			await Quiz.insertMany(defaultQuizzes.quizzes);
			console.log("✅ Default quizzes added");
		}
	} catch (error) {
		console.error("Seeding error:", error);
	}
}

// get all quizzes
app.get("/api/quizzes", async (req, res) => {
	try {
		const quizzes = await Quiz.aggregate([
			{
				$project: {
					_id: 1,
					id: 1,
					title: 1,
					description: 1,
					questionsCount: { $size: "$questions" },
				},
			},
		]);
		res.json(quizzes);
	} catch (error) {
		console.error("Error fetching quizzes:", error);
		res.status(500).json({ error: "Failed to fetch quizzes" });
	}
});

// create new quiz
app.post("/api/quizzes", async (req, res) => {
	try {
		const { id, title, description, questions } = req.body;

		if (!id || !title || !Array.isArray(questions)) {
			return res.status(400).json({ error: "Invalid payload" });
		}

		const exists = await Quiz.findOne({ id });
		if (exists) {
			return res.status(409).json({ error: "Quiz with this id already exists" });
		}

		const quiz = new Quiz({
			id: String(id),
			title,
			description,
			questions,
		});

		await quiz.save();

		res.status(201).json({ ok: true, quiz });
	} catch (error) {
		console.error("Create quiz error:", error);
		res.status(500).json({ error: "Failed to create quiz" });
	}
});

// single quiz by id
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

// update quiz by id
app.put("/api/quizzes/:id", async (req, res) => {
	try {
		const updates = {};
		const { title, description, questions } = req.body;

		if (title !== undefined) updates.title = title;
		if (description !== undefined) updates.description = description;
		if (questions !== undefined) {
			if (!Array.isArray(questions)) {
				return res.status(400).json({ error: "Questions must be an array" });
			}
			updates.questions = questions;
		}

		const quiz = await Quiz.findOneAndUpdate(
			{ id: req.params.id },
			{ $set: updates },
			{ new: true },
		);

		if (!quiz) {
			return res.status(404).json({ error: "Quiz not found" });
		}

		res.json({ ok: true, quiz });
	} catch (error) {
		console.error("Update quiz error:", error);
		res.status(500).json({ error: "Failed to update quiz" });
	}
});

// delete quiz by id
app.delete("/api/quizzes/:id", async (req, res) => {
	try {
		const quiz = await Quiz.findOneAndDelete({ id: req.params.id });
		if (!quiz) {
			return res.status(404).json({ error: "Quiz not found" });
		}
		res.json({ ok: true });
	} catch (error) {
		console.error("Delete quiz error:", error);
		res.status(500).json({ error: "Failed to delete quiz" });
	}
});

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

		answers: {
			type: Array,
			required: true,
		},

		questions: {
			type: Array,
			required: true,
		},

		createdAt: { type: Date, default: Date.now, index: true },
	},
	{ versionKey: false },
);

const Result = mongoose.model("Result", resultSchema, "results");

// get all results
app.get("/api/results", async (req, res) => {
	try {
		const results = await Result.find()
			.select("-questions -answers")
			.sort({ createdAt: -1 })
			.lean();
		res.json(results);
	} catch (error) {
		console.error("Error fetching results:", error);
		res.status(500).json({ error: "Failed to fetch results" });
	}
});

// save result
app.post("/api/results", async (req, res) => {
	try {
		const { quizId, answers, summary, timestamp } = req.body;

		if (!quizId || !answers || !summary || !timestamp) {
			return res.status(400).json({ error: "Invalid payload" });
		}

		const quiz = await Quiz.findOne({ id: String(quizId) }).lean();
		if (!quiz) {
			return res.status(404).json({ error: "Quiz not found" });
		}

		const result = new Result({
			quizId,
			quizTitle: quiz.title,
			timestamp,
			summary,
			answers,
			questions: quiz.questions,
		});

		await result.save();

		res.status(201).json({ ok: true, resultId: result._id });
	} catch (error) {
		console.error("Save result error:", error);
		res.status(500).json({ error: "Failed to save result" });
	}
});

// get single result by id
app.get("/api/results/:id", async (req, res) => {
	try {
		const result = await Result.findById(req.params.id).lean();
		if (!result) {
			return res.status(404).json({ error: "Result not found" });
		}
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
