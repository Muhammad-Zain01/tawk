import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);
});

const PORT = process.env.PORT || 3200;

app.get("/", (req, res) => {
  res.send("Server is running...");
});

server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
