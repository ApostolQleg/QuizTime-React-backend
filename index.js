import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

dotenv.config();

// Fastify initialization
const app = Fastify({
	logger: true,
	trustProxy: true,
	connectionTimeout: 20000,
});

// CORS registration
await app.register(cors, {
	origin: ["https://quiz-time-with-react.vercel.app", "http://localhost:5173"],
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
});

// Database connection via plugin
app.register(async (instance) => {
	try {
		await connectToDatabase();
		instance.log.info("MongoDB connection established via Plugin");
	} catch (err) {
		instance.log.error("Database connection failed", err);
		throw err;
	}
});

// Database connection
connectToDatabase().catch((err) => {
	console.error("Database connection failed:", err);
	process.exit(1);
});

// Route registration
app.register(authRoutes, { prefix: "/auth" });
app.register(quizRoutes, { prefix: "/api/quizzes" });
app.register(resultRoutes, { prefix: "/api/results" });
app.register(userRoutes, { prefix: "/api/user" });

// Health check route
app.get("/", async (request, reply) => {
	return { status: "Server is running (Fastify)", time: new Date() };
});

// Serverless function for Vercel
export default async function handler(req, res) {
	await app.ready();
	app.server.emit("request", req, res);
}

// Local development server
if (process.env.NODE_ENV !== "production") {
	const PORT = process.env.PORT || 3000;
	try {
		await app.listen({ port: PORT });
		console.log(`Server running on port ${PORT}`);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}
