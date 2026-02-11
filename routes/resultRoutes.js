import express from "express";
import { getUserResults, saveResult, getResultById } from "../controllers/resultController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, getUserResults);
router.get("/:id", checkAuth, getResultById);

router.post("/", checkAuth, saveResult);

export default router;
