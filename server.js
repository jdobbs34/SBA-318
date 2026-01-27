// Imports
import express from "express";
import recipeList from "./routes/recipelist.js";
import { logger } from "./middleware/middleware.js";
import { globalErr } from "./middleware/globalerr.js";

// Setups
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(logger);

// View Engine
app.engine("html", function (FilePath, options, cb) {
  
  fs.readFile(FilePath, (err, content) => {
    if (err) return cb(err);
    let rendered = content.toString();

    return cb(null, rendered);
  });
});

// Set it into express
app.set("views", "./views")
app.set("view engine", "html")

// Routes
app.get('/home', (req, res) => {

  res.render("index")
})

app.use("/api/recipes", recipeList);
 
// Global Err handling middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

// id: Number
// name: String
// categoryId: Number
// Ingredients: String
// instructions: String
