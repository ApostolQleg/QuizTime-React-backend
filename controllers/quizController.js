import Quiz from "../models/Quiz.js";
import User from "../models/User.js";
import { defaultQuizzes } from "../data/defaultQuizzes.js";

// seed database logic
export async function checkAndSeedDatabase() {
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

export const getAllQuizzes = async (req, res) => {
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
};

export const createQuiz = async (req, res) => {
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
};

export const getQuizById = async (req, res) => {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id });
		if (!quiz) return res.status(404).json({ error: "Quiz not found" });
		res.json(quiz);
	} catch (error) {
		console.error("Fetch quiz error:", error);
		res.status(500).json({ error: "Failed to fetch quiz" });
	}
};

export const updateQuiz = async (req, res) => {
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
};

export const deleteQuiz = async (req, res) => {
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
};