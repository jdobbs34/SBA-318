// Imports
import express from "express";
import {logger, globalErr} from "./middleware/middleware.js";

// Setups
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.send("Aloha");
});

// Global Err handling middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
