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
	.then(() => {
		console.log("✅ Connected to MongoDB");
		initDatabase();
	})
	.catch((err) => console.error("❌ MongoDB connection error:", err));

const quizSchema = new mongoose.Schema({}, { strict: false });

const Quiz = mongoose.model("Quiz", quizSchema, "storage");

app.use(
	cors({
		origin: ["https://quiz-time-with-react.vercel.app"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
	})
);

app.use(express.json());

async function initDatabase() {
	try {
		const count = await Quiz.countDocuments();
		if (count === 0) {
			console.log("📂 Database is empty. Seeding default quizzes...");
			await Quiz.insertMany(defaultQuizzes);
			console.log("✅ Default quizzes added!");
		}
	} catch (error) {
		console.error("Error seeding database:", error);
	}
}

app.get("/api/storage", async (req, res) => {
	try {
		const storage = await Quiz.find();
		res.json(storage);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch quizzes" });
	}
});

app.put("/api/storage", async (req, res) => {
	try {
		const newData = req.body;

		await Quiz.deleteMany({});
		await Quiz.insertMany(newData);

		res.json({ ok: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to save quizzes" });
	}
});

if (process.env.NODE_ENV !== "production") {
	app.listen(PORT, () => {
		console.log(`✅ Backend running on http://localhost:${PORT}`);
	});
}

export default app;
