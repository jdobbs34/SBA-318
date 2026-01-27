// Imports
import express from "express";
import recipelist from  "./routes/recipelist.js"
import {logger} from "./middleware/middleware.js";
import {globalErr} from "./middleware/globalerr.js"

// Setups
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/recipes', recipelist)

// Global Err handling middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
