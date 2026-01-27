import express from "express";
import db from "../database/database.js";

const router = express.Router();

router
  .route("/")
  // Create
  .post((req, res) => {
    let { name, recipe } = req.body;

    // Error handling
    if (name && recipe) {
      let id;

      if (db.length == 0) {
        // If db is empty
        id = 1;
      } else {
        id = db[db.length - 1].id + 1;
      }

      let newRecipe = {
        id: id,
        name,
        categoryId,
        Ingredients,
        instructions,
      };

      db.push(newRecipe);
    } else {
      res.status(400).json({ error: "Insufficient Data" });
    }
  })
  // Read
  .get((req, res) => {
    res.json({ db });
  });

// Update
router.route("/:id").put((req, res) => {
  let id = req.params.id;

  let updatedRecipe = db.find((recipe, i) => {
    if (recipe.id == id) {
      for (let key in req.body) {
        db[i][key] = req.body[key];
      }

      return true;
    }
  });

  if (updatedRecipe) {
    res.json({updatedRecipe});
  } else {
    res.status(400).json({ error: "Could not find recipe" });
  }
});
// Delete
router.route("/").delete((req, res) => {
  let id = req.params.id;

  let deletedRecipe = db.find((recipe, i) => {
    if (recipe.id == id) {
      return db.splice(i, 1);
    }
  });

  if (deletedRecipe) {
    res.json({ deletedRecipe });
  } else {
    res.status(400).json({ error: "Could not find recipe" });
  }
  next();
});

// Filter
router.route("/:cat/categoryId").get((req, res) => {
  let categoryId = req.params.cat;

  let filteredData = db.filter((recipe) => recipe.categoryId == categoryId);

  res.json({ filteredData });
});

export default router;
