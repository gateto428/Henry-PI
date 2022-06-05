const { Router } = require('express');
const Recipes = require("./Recipe.js")
const TypeDiets = require("./TypeDiet.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", Recipes)
router.use("/typediet", TypeDiets)


module.exports = router;