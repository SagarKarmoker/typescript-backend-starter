import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { prisma } from "./lib/prisma";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

// health check and uptime
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Server is running",
        uptime: process.uptime()
    })
})

app.get("/users", async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();

    res.status(200).json({
        status: "success",
        data: users
    })
})

// unknown route
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "This route does not exist",
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})