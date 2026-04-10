import express from "express";
import authRouter from "../src/routes/auth.route.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import config from "./config/config.js";
import errorHandler from "./middlewares/errorHandler.js";
import goalRouter from "./routes/goal.route.js";
import checkinRouter from "./routes/checkin.routes.js";





const app = express();





/** application Middleware */
app.use(cors({
  origin:config.FRONTEND_URL,
  credentials:true
}))
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))





app.use("/api/auth",authRouter);
app.use("/api/goal",goalRouter);
app.use("/api/checkin",checkinRouter);







/** health Check route */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running!" });
});






app.use(errorHandler);

export default app;
