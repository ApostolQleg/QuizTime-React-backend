import Quiz from "../models/Quiz.js";
import User from "../models/User.js";
import { defaultQuizzes } from "../data/defaultQuizzes.js";

// seed database logic
export const checkAndSeedDatabase = async () => {
	try {
		const count = await Quiz.countDocuments();
		if (count === 0) {
			await Quiz.insertMany(defaultQuizzes.quizzes);
			console.log("✅ Default quizzes seeded");
		}
	} catch (error) {
		console.error("Seeding error:", error);
	}
};

// Quiz getting logic with pagination
export const getAllQuizzes = async (request, reply) => {
	try {
		await checkAndSeedDatabase();

		const limit = parseInt(request.query.limit);
		let skip = parseInt(request.query.skip);

		if (isNaN(skip)) {
			const page = parseInt(request.query.page) || 1;
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

		reply.send(mappedQuizzes);
	} catch (error) {
		console.error("Error fetching quizzes:", error);
		reply.code(500).send({ error: "Failed to fetch quizzes" });
	}
};

// Quiz creation logic
export const createQuiz = async (request, reply) => {
	try {
		const { id, title, description, questions } = request.body;
		if (!id || !title || !Array.isArray(questions)) {
			return reply.code(400).send({ error: "Invalid payload" });
		}
		const exists = await Quiz.findOne({ id });
		if (exists) return reply.code(409).send({ error: "Quiz with this id already exists" });

		const user = await User.findById(request.userId);
		if (!user) return reply.code(404).send({ error: "Author not found" });

		const quiz = new Quiz({
			id: String(id),
			title,
			description,
			questions,
			authorId: request.userId,
			authorName: user.name,
		});
		await quiz.save();
		reply.code(201).send({ ok: true, quiz });
	} catch (error) {
		console.error("Create quiz error:", error);
		reply.code(500).send({ error: "Failed to create quiz" });
	}
};

// Quiz fetching logic
export const getQuizById = async (request, reply) => {
	try {
		const quiz = await Quiz.findOne({ id: request.params.id });
		if (!quiz) return reply.code(404).send({ error: "Quiz not found" });
		reply.send(quiz);
	} catch (error) {
		console.error("Fetch quiz error:", error);
		reply.code(500).send({ error: "Failed to fetch quiz" });
	}
};

// Quiz update logic
export const updateQuiz = async (request, reply) => {
	try {
		const quiz = await Quiz.findOne({ id: request.params.id });
		if (!quiz) return reply.code(404).send({ error: "Quiz not found" });

		if (!quiz.authorId) return reply.code(403).send({ error: "Cannot edit system quizzes" });

		if (String(quiz.authorId) !== String(request.userId)) {
			return reply.code(403).send({ error: "You are not the author" });
		}

		const updates = {};
		const { title, description, questions } = request.body;
		if (title !== undefined) updates.title = title;
		if (description !== undefined) updates.description = description;
		if (questions !== undefined) {
			if (!Array.isArray(questions))
				return reply.code(400).send({ error: "Questions must be an array" });
			updates.questions = questions;
		}
		const updatedQuiz = await Quiz.findOneAndUpdate(
			{ id: request.params.id },
			{ $set: updates },
			{ new: true },
		);
		reply.send({ ok: true, quiz: updatedQuiz });
	} catch (error) {
		console.error("Update quiz error:", error);
		reply.code(500).send({ error: "Failed to update quiz" });
	}
};

// Quiz deletion logic
export const deleteQuiz = async (request, reply) => {
	try {
		const quiz = await Quiz.findOne({ id: request.params.id });
		if (!quiz) return reply.code(404).send({ error: "Quiz not found" });

		if (!quiz.authorId) return reply.code(403).send({ error: "Cannot delete system quizzes" });

		if (String(quiz.authorId) !== String(request.userId)) {
			return reply.code(403).send({ error: "You are not the author" });
		}
		await Quiz.findOneAndDelete({ id: request.params.id });
		reply.send({ ok: true });
	} catch (error) {
		console.error("Delete quiz error:", error);
		reply.code(500).send({ error: "Failed to delete quiz" });
	}
};
