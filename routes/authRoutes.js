import express from "express";
import {
	register,
	login,
	googleAuth,
	googleExtract,
	sendCode,
	getMe,
} from "../controllers/authController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleAuth);
router.post("/google-extract", googleExtract);
router.post("/send-code", sendCode);

router.get("/me", checkAuth, getMe);

export default router;
