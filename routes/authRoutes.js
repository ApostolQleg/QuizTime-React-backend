import {
	register,
	login,
	googleAuth,
	googleExtract,
	sendCode,
} from "../controllers/authController.js";

export default async function authRoutes(fastify) {
	fastify.post("/register", register);
	fastify.post("/login", login);
	fastify.post("/google", googleAuth);
	fastify.post("/google-extract", googleExtract);
	fastify.post("/send-code", sendCode);
}
