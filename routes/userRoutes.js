import {
	getUser,
	changePassword,
	updateProfile,
	deleteAccount,
} from "../controllers/userController.js";
import { checkAuth } from "../middleware/checkAuth.js";

export default async function userRoutes(fastify) {
	fastify.addHook("preHandler", checkAuth);

	fastify.get("/", getUser);
	fastify.put("/update", updateProfile);
	fastify.post("/password", changePassword);
	fastify.delete("/delete", deleteAccount);
}
