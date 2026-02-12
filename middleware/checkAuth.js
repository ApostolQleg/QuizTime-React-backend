import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const checkAuth = async (request, reply) => {
	const token = (request.headers.authorization || "").replace(/Bearer\s?/, "");

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			if (!decoded._id) {
				return reply.code(403).send({ error: "Invalid token structure" });
			}

			const user = await User.findById(decoded._id);

			if (!user) {
				return reply.code(401).send({ error: "User deleted or disabled" });
			}

			request.userId = decoded._id;
		} catch (e) {
			return reply.code(403).send({ error: "No access" });
		}
	} else {
		return reply.code(403).send({ error: "No access" });
	}
};
