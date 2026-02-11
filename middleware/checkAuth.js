import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Authentication checking middleware
export const checkAuth = async (req, res, next) => {
	const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			if (!decoded._id) {
				console.error("Token missing _id:", decoded);
				return res.status(403).json({ error: "Invalid token structure" });
			}

			const user = await User.findById(decoded._id);

			if (!user) {
				return res.status(401).json({ error: "User deleted or disabled" });
			}

			req.userId = decoded._id;
			next();
		} catch (e) {
			console.error("Token verification failed:", e);
			return res.status(403).json({ error: "No access" });
		}
	} else {
		return res.status(403).json({ error: "No access" });
	}
};
