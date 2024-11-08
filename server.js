require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 7050;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api", recipeRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);