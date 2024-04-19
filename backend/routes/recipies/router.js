const express = require("express");
const createRecipie = require("./createRecipie");
const authMiddleware = require("../../controllers/authMiddleware");
const getRecipies = require("./getRecipies");
const createIngredient = require("./createIngredient");
const getRecipieById = require("./getRecipieById");
const router = express.Router()
//recipie route registeration

router.post("/", authMiddleware, createRecipie);
router.post("/createIngred", authMiddleware, createIngredient);
router.get("/", authMiddleware, getRecipies);
router.get("/:id", authMiddleware, getRecipieById)


module.exports = router;