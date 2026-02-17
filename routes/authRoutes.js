import {
	register,
	login,
	googleAuth,
	googleExtract,
	sendCode,
	linkGoogle,
} from "../controllers/authController.js";
import { checkAuth } from "../middleware/checkAuth.js";

export default async function authRoutes(fastify) {
	fastify.post("/register", register);
	fastify.post("/login", login);
	fastify.post("/google", googleAuth);
	fastify.post("/google-extract", googleExtract);
	fastify.post("/send-code", sendCode);
	fastify.post("/link-google", checkAuth, linkGoogle);
}
