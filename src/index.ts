import express from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import subjectsRouter from "./routes/subjects";
import securityMiddleware from "./middleware/security";
import { auth } from "./lib/auth";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use(securityMiddleware);

app.use("/api/subjects", subjectsRouter);

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`),
);
