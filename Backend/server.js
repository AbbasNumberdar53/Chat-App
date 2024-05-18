import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";


dotenv.config();
const PORT = process.env.PORT || 5000;

// Make sure to configure body parser middleware before defining routes
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("root");
});


server.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
    connectToMongoDB();
});
