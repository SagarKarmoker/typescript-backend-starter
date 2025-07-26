import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Server is running"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})