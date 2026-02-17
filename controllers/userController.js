import bcrypt from "bcrypt";
import User from "../models/User.js";
import Result from "../models/Result.js";

// Get current user logic
export const getUser = async (request, reply) => {
	try {
		const user = await User.findById(request.userId);

		if (!user) {
			return reply.code(404).send({ error: "User not found" });
		}

		return reply.send({
			ok: true,
			user: {
				_id: user._id,
				name: user.name,
				email: user.email,
				avatarUrl: user.avatarUrl,
				themeColor: user.themeColor,
				avatarType: user.avatarType,
				googleId: user.googleId,
			},
		});
	} catch (error) {
		return reply.code(500).send({ error: "Auth check failed" });
	}
};

// Change password logic
export const changePassword = async (request, reply) => {
	try {
		const { currentPassword, newPassword } = request.body;
		if (!currentPassword || !newPassword) {
			return reply.code(400).send({ error: "Current and new passwords are required" });
		}

		const user = await User.findById(request.userId);
		if (!user) {
			return reply.code(404).send({ error: "User not found" });
		}

		const isMatch = await user.comparePassword(currentPassword);
		if (!isMatch) {
			return reply.code(400).send({ error: "Current password is incorrect" });
		}

		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(newPassword, salt);
		user.passwordHash = passwordHash;

		await user.save();

		return reply.send({ ok: true, message: "Password changed successfully" });
	} catch (error) {
		console.error("Change password error:", error);
		return reply.code(500).send({ error: "Failed to change password" });
	}
};

// Profile update logic
export const updateProfile = async (request, reply) => {
	try {
		const { name, themeColor, avatarType } = request.body;

		const user = await User.findById(request.userId);

		if (!user) {
			return reply.code(404).send({ error: "User not found" });
		}

		if (name) user.name = name;
		if (themeColor) user.themeColor = themeColor;
		if (avatarType) user.avatarType = avatarType;

		await user.save();

		const { passwordHash, ...userData } = user.toObject();

		return reply.send({
			ok: true,
			user: userData,
		});
	} catch (error) {
		console.error("Profile update error:", error);
		return reply.code(500).send({ error: "Failed to update profile" });
	}
};

// Delete account logic
export const deleteAccount = async (request, reply) => {
	try {
		const deletedUser = await User.findByIdAndDelete(request.userId);

		if (!deletedUser) {
			return reply.code(404).send({ error: "User not found" });
		}

		await Result.deleteMany({ userId: request.userId });

		return reply.send({ ok: true, message: "Account deleted successfully" });
	} catch (error) {
		console.error("Delete account error:", error);
		return reply.code(500).send({ error: "Failed to delete account" });
	}
};
