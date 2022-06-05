require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();
const {API_KEY} = process.env;
const {recipe, typediet, step} = require("../db");

const getApiFullData = async () => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        return response.data.results.map((e) => {
            return {
                id: e.id,
                name: e.title.toLowerCase(),
                summary: e.summary,
                health_score: e.healthScore,
                img: e.image,
                steps: e.analyzedInstructions[0]?.steps.map((s) => {
                    return {
                      number: s.number, 
                      step: s.step,
                    };
                  })
            }
        });
    } catch (error) {
        console.log(error)
    }
}

const getRecipesDb = async () =>{
   try {
       return await recipe.findAll({
        include: {
          model: typediet,
          attributes: ["name"],
        },
      });
        
   } catch (error) {
      console.log(error)
   }
}

const getAllRecipes = async () =>{
    try {
        let api = await getApiFullData();
        let db = await getRecipesDb();
        let concat = api.concat(db);
        return concat;
    } catch (error) {
        console.log(error)
    }
}

//getByName
router.get('/', async(req, res) => {
    try {
        let { name } = req.query;
        let recipes = await getAllRecipes();
        if(!name) return res.status(200).json(recipes);
        let auxRecipes  = recipes.filter((e) => e.name.toUpperCase().includes((name.toUpperCase())));
        auxRecipes.length? res.json(auxRecipes):  res.status(404).json({ msg: `not found recipes with ${name}` });
    } catch (error) {
        res.status(404).json({error});
    }
})


router.post('/', async(req, res) =>{
    let {name, summary, health_score, steps, img, type} = req.body;
    let stepsMap = steps.map(async (e) =>  await step.create({step: e}))
    let resp = await Promise.all(stepsMap)
    try {
        const newRecipe = await recipe.create({
            name,
            summary,
            health_score,
            img, 
          });
         
          resp.map(e => e.setRecipe(newRecipe)); // pasos
          
          for(let i = 0; i < type.length; i++){
              let  promise   = await typediet.findOne({
                where: { name: type[i] },
              })
              await newRecipe.addTypediet(promise)  ;  
          }
          return res.status(200).send({ msg: "successfully created" });
    } catch (error) {
        return res.status(400).send({ error});
    }
});

//,
/**
  {
    name: "mani",
    summary: "hajhsjahjshjah",
    health_score: 76,
    steps: [
{
"number": 1,
"step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
"ingredients": [
{
"id": 10011135,
"name": "cauliflower florets",
"localizedName": "cauliflower florets",
"image": "cauliflower.jpg"
},
{
"id": 10111135,
"name": "cauliflower rice",
"localizedName": "cauliflower rice",
"image": "cauliflower.jpg"
},
{
"id": 11135,
"name": "cauliflower",
"localizedName": "cauliflower",
"image": "cauliflower.jpg"
},
{
"id": 20028,
"name": "couscous",
"localizedName": "couscous",
"image": "couscous-cooked.jpg"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [
{
"id": 404771,
"name": "food processor",
"localizedName": "food processor",
"image": "food-processor.png"
}
]
},
{
"number": 2,
"step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
"ingredients": [
{
"id": 1001,
"name": "butter",
"localizedName": "butter",
"image": "butter-sliced.jpg"
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 3,
"step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
"ingredients": [
{
"id": 11291,
"name": "green onions",
"localizedName": "green onions",
"image": "spring-onions.jpg"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
}
],
"equipment": []
},
{
"number": 4,
"step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
"ingredients": [
{
"id": 11135,
"name": "cauliflower",
"localizedName": "cauliflower",
"image": "cauliflower.jpg"
},
{
"id": 0,
"name": "spread",
"localizedName": "spread",
"image": ""
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 5,
"step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
"ingredients": [
{
"id": 4047,
"name": "coconut oil",
"localizedName": "coconut oil",
"image": "oil-coconut.jpg"
},
{
"id": 1001,
"name": "butter",
"localizedName": "butter",
"image": "butter-sliced.jpg"
},
{
"id": 0,
"name": "spread",
"localizedName": "spread",
"image": ""
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 6,
"step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
"ingredients": [
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [],
"length": {
"number": 2,
"unit": "minutes"
}
},
{
"number": 7,
"step": "Add the peas and broccoli and stir again.",
"ingredients": [
{
"id": 11090,
"name": "broccoli",
"localizedName": "broccoli",
"image": "broccoli.jpg"
},
{
"id": 11304,
"name": "peas",
"localizedName": "peas",
"image": "peas.jpg"
}
],
"equipment": []
},
{
"number": 8,
"step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
"ingredients": [
{
"id": 4058,
"name": "sesame oil",
"localizedName": "sesame oil",
"image": "sesame-oil.png"
},
{
"id": 16124,
"name": "soy sauce",
"localizedName": "soy sauce",
"image": "soy-sauce.jpg"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": []
},
{
"number": 9,
"step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
"ingredients": [
{
"id": 12023,
"name": "sesame seeds",
"localizedName": "sesame seeds",
"image": "sesame-seeds.png"
},
{
"id": 16124,
"name": "soy sauce",
"localizedName": "soy sauce",
"image": "soy-sauce.jpg"
},
{
"id": 11291,
"name": "green onions",
"localizedName": "green onions",
"image": "spring-onions.jpg"
},
{
"id": 5006,
"name": "whole chicken",
"localizedName": "whole chicken",
"image": "whole-chicken.jpg"
},
{
"id": 18070,
"name": "toast",
"localizedName": "toast",
"image": "toast"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
}
],
img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
type: [
"gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan"
]
  }
 */

router.get('/:id', async(req, res)=>{
    try {
        let { id } = req.params;
        let recipes = await getAllRecipes();
        if(!id) return res.status(400).json({ msg: `Ingrese id` });
        let findId = recipes.find((e) => parseInt(e.id )=== parseInt(id));
        return findId? res.status(200).json(findId): res.status(404).json({ msg: `not found recipes with id:  ${id}`});
    } catch (error) {
        res.status(404).json({error});
    }
});

module.exports = router;