import bcrypt from "bcrypt";
import User from "../models/User.js";
import Result from "../models/Result.js";

// Get current user logic
export const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.userId);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json({
			ok: true,
			user: {
				_id: user._id,
				name: user.name,
				email: user.email,
				avatarUrl: user.avatarUrl,
			},
		});
	} catch (error) {
		res.status(500).json({ error: "Auth check failed" });
	}
};

// Change password logic
export const changePassword = async (req, res) => {
	try {
		const { currentPassword, newPassword } = req.body;
		if (!currentPassword || !newPassword) {
			return res.status(400).json({ error: "Current and new passwords are required" });
		}

		const user = await User.findById(req.userId);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const isMatch = await user.comparePassword(currentPassword);
		if (!isMatch) {
			return res.status(400).json({ error: "Current password is incorrect" });
		}

		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(newPassword, salt);
		user.passwordHash = passwordHash;

		await user.save();

		res.json({ ok: true, message: "Password changed successfully" });
	} catch (error) {
		console.error("Change password error:", error);
		res.status(500).json({ error: "Failed to change password" });
	}
};

// Profile update logic
export const updateProfile = async (req, res) => {
	try {
		const { name, themeColor, avatarType } = req.body;

		const user = await User.findById(req.userId);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		if (name) user.name = name;
		if (themeColor) user.themeColor = themeColor;
		if (avatarType) user.avatarType = avatarType;

		await user.save();
		res.json({
			ok: true,
			user: { name: user.name, themeColor: user.themeColor, avatarType: user.avatarType },
		});
	} catch (error) {
		console.error("Profile update error:", error);
		res.status(500).json({ error: "Failed to update profile" });
	}
};

// Delete account logic
export const deleteAccount = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.userId);
	
		if (!deletedUser) {
			return res.status(404).json({ error: "User not found" });
		}

		await Result.deleteMany({ userId: req.userId });

		res.json({ ok: true, message: "Account deleted successfully" });
	} catch (error) {
		console.error("Delete account error:", error);
		res.status(500).json({ error: "Failed to delete account" });
	}
};
