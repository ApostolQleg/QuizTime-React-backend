import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		passwordHash: { type: String, required: true },
		themeColor: String,
		avatarUrl: String,
		avatarType: String,
		googleId: String,
	},
	{ versionKey: false },
);

export default mongoose.model("User", userSchema, "users");
