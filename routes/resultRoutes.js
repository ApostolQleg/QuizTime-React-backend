import express from "express";
import { getUserResults, saveResult, getResultById } from "../controllers/resultController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, getUserResults);
router.post("/", checkAuth, saveResult);
router.get("/:id", checkAuth, getResultById);

export default router;
