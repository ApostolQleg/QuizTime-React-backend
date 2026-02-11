import express from "express";
import {
	register,
	login,
	googleAuth,
	googleExtract,
	sendCode,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleAuth);
router.post("/google-extract", googleExtract);
router.post("/send-code", sendCode);

export default router;
