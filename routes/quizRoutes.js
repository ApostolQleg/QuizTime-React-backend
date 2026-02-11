import express from "express";
import {
	getAllQuizzes,
	createQuiz,
	getQuizById,
	updateQuiz,
	deleteQuiz,
} from "../controllers/quizController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);

router.post("/", checkAuth, createQuiz);

router.put("/:id", checkAuth, updateQuiz);

router.delete("/:id", checkAuth, deleteQuiz);

export default router;
