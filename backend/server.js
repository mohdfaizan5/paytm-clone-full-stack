import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./db/connectDB.js";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routing
import userRoutes from "./routes/user.routes.js";
import accountRoutes from "./routes/account.routes.js";

app.use("/api/v1/user/", userRoutes);
app.use("/api/v1/account/", accountRoutes);


const PORT = process.env.BACKEND_PORT | 5000

connectDB()
  .then((res) => {
    console.log(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server up✅✅");
    });
  })
  .catch((error) => {
    console.log(error);
  });
