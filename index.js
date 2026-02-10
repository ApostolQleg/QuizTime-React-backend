import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS setup
app.use(
	cors({
		origin: ["https://quiz-time-with-react.vercel.app", "http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);

app.use(express.json());

// Global Middleware for DB Connection
app.use(async (req, res, next) => {
	try {
		await connectToDatabase();
		next();
	} catch (error) {
		console.error("Database connection failed:", error);
		res.status(500).json({ error: "Database connection failed" });
	}
});

// Routes
app.use("/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/results", resultRoutes);

// Export for Vercel
export default app;

// Start server if not in production (local dev)
if (process.env.NODE_ENV !== "production") {
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
