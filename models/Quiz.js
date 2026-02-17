import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		id: String,
		questions: Array,
		authorId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		authorName: String,
	},
	{ versionKey: false },
);

export default mongoose.model("Quiz", quizSchema, "quizzes");
