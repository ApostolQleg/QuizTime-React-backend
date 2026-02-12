import {
	getAllQuizzes,
	createQuiz,
	getQuizById,
	updateQuiz,
	deleteQuiz,
} from "../controllers/quizController.js";
import { checkAuth } from "../middleware/checkAuth.js";

export default async function quizRoutes(fastify) {
	// public routes
	fastify.get("/", getAllQuizzes);
	fastify.get("/:id", getQuizById);

	// protected routes
	fastify.register(async function (protectedRoutes) {
		protectedRoutes.addHook("preHandler", checkAuth);

		protectedRoutes.post("/", createQuiz);
		protectedRoutes.put("/:id", updateQuiz);
		protectedRoutes.delete("/:id", deleteQuiz);
	});
}
