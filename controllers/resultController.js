import Result from "../models/Result.js";
import Quiz from "../models/Quiz.js";

export const getUserResults = async (req, res) => {
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
};

export const saveResult = async (req, res) => {
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
};

export const getResultById = async (req, res) => {
	try {
		const result = await Result.findById(req.params.id).lean();
		if (!result) return res.status(404).json({ error: "Result not found" });
		res.json(result);
	} catch (error) {
		console.error("Fetch result error:", error);
		res.status(500).json({ error: "Failed to fetch result" });
	}
};