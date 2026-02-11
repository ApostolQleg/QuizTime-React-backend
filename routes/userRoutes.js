import express from "express";
import {
	getUser,
	changePassword,
	updateProfile,
	deleteAccount,
} from "../controllers/userController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, getUser);

router.put("/update", checkAuth, updateProfile);

router.post("/password", checkAuth, changePassword);

router.delete("/delete", checkAuth, deleteAccount);

export default router;
