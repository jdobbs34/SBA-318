// Imports
import express from "express";

// Setups
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`)

    if (req.body) {
        console.log(`Req Date`, req.body)
    }

    next();
});

// Routes
app.get("/", {req, res} => {
    res.send("Aloha")
})

// Global Err handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({error: "Server Error"})
})

// Listener
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
}); 
