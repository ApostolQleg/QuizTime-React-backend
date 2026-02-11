import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.methods.comparePassword = async function (candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.passwordHash);
};

export default mongoose.model("User", userSchema, "users");
