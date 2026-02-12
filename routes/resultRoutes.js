import { getUserResults, saveResult, getResultById } from "../controllers/resultController.js";
import { checkAuth } from "../middleware/checkAuth.js";

export default async function resultRoutes(fastify) {
	fastify.addHook("preHandler", checkAuth);

	fastify.get("/", getUserResults);
	fastify.get("/:id", getResultById);
	fastify.post("/", saveResult);
}
