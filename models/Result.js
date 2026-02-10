import mongoose from "mongoose";

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

export default mongoose.model("Result", resultSchema, "results");
