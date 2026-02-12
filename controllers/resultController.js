import Result from "../models/Result.js";
import Quiz from "../models/Quiz.js";

// User results getting logic
export const getUserResults = async (request, reply) => {
	try {
		if (!request.userId) {
			return reply.code(400).send({ error: "User ID missing" });
		}

		const limit = parseInt(request.query.limit) || 36;
		const skip = parseInt(request.query.skip) || 0;

		const results = await Result.find({ userId: request.userId })
			.select("-questions")
			.sort({ createdAt: -1 })
			.skip(skip)
			.limit(limit)
			.lean();

		reply.send(results);
	} catch (error) {
		console.error("Error fetching results:", error);
		reply.code(500).send({ error: "Failed to fetch results" });
	}
};

// Result saving logic
export const saveResult = async (request, reply) => {
	try {
		const { quizId, answers, summary, timestamp } = request.body;
		if (!quizId || !answers || !summary || !timestamp) {
			return reply.code(400).send({ error: "Invalid payload" });
		}
		const quiz = await Quiz.findOne({ id: String(quizId) }).lean();
		if (!quiz) return reply.code(404).send({ error: "Quiz not found" });

		const result = new Result({
			quizId,
			quizTitle: quiz.title,
			timestamp,
			summary,
			answers,
			questions: quiz.questions,
			userId: request.userId,
		});

		await result.save();
		reply.code(201).send({ ok: true, resultId: result._id });
	} catch (error) {
		console.error("Save result error:", error);
		reply.code(500).send({ error: "Failed to save result" });
	}
};

// Result fetching logic
export const getResultById = async (request, reply) => {
	try {
		const result = await Result.findById(request.params.id).lean();
		if (!result) return reply.code(404).send({ error: "Result not found" });
		reply.send(result);
	} catch (error) {
		console.error("Fetch result error:", error);
		reply.code(500).send({ error: "Failed to fetch result" });
	}
};
