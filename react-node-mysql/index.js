import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());
server.use(router);
server.listen(port, () => console.log(`Server running on ${port}`));
