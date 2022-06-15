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
                steps: e.analyzedInstructions[0]?.steps.map((s) =>{
                    return {
                        number: s.number,
                        step: s.step
                    }
                }),
                typediets: (e.diets?.map((i) =>{
                    return{
                        name: i,
                    }
                }))
            }
        });
    } catch (error) {
        console.log(error)
    }
}

const getRecipesDb = async () =>{
   try {
       let promise = await recipe.findAll({
        include: [{
          model: typediet,
          attributes: ["name"],
          through: {
            attributes: []
          }
        },
        {
            model:step,
            attributes:["number","step"],
        }]
      });     
      return promise;
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
        console.log(error);
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
    let stepsMap = steps.map(async (e) =>  await step.create({step: e.step, number: e.number}))
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
                where: { name: type[i].replaceAll(" ", "-") },
              })
              await newRecipe.addTypediet(promise)  ;  
          }
          return res.status(200).send({ msg: "successfully created" });
    } catch (error) {
        return res.status(400).send({ error});
    }
});

const getByIdApi = async (id)=> { 
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        let e = response.data;
            return {
                id: e.id,
                name: e.title.toLowerCase(),
                summary: e.summary.replaceAll(/<(“[^”]*”|'[^’]*’|[^'”>])*>/g, ''),
                health_score: e.healthScore,
                img: e.image,
                steps: e.analyzedInstructions[0]?.steps.map((s) =>{
                    return {
                        number: s.number,
                        step: s.step
                    }
                }),
                typediets: (e.diets?.map((i) =>{
                    return{
                        name: i,
                    }
                }))
            }
    } catch (error) {
        console.log(error)
    }
}

router.get('/:id', async(req, res)=>{
    try {
        let { id } = req.params;
        if(!id) return res.status(400).json({ msg: `Ingrese id` });
        if(!id.includes('-')){
            let recipe = await getByIdApi(id); 
            return recipe? res.status(200).json(recipe): res.status(404).json({ msg: `not found recipes with id:  ${id}`});
        }else {
            let recipes = await getRecipesDb();
            let findId = recipes.find((e) => e.id === id);
            return findId? res.status(200).json(findId): res.status(404).json({ msg: `not found recipes with id:  ${id}`});
        }
    } catch (error) {
        return res.status(404).json({error});
    }
});

router.delete('/:id', async(req, res) => {
    try {
        let { id } = req.params;
        if(!id) return res.status(400).json({ msg: `Ingrese id` });
        const deleteR = await recipe.destroy({
            where:{
                id: id,
            }
        })
        return res.status(200).json({ msg: "successfully deleted"});
    } catch (error) {
        return res.status(400).json({ msg: "error deleted"});
    }
});


/***
 * const newRecipe = await recipe.create({
            name,
            summary,
            health_score,
            img, 
          });
 * 
 * 
 */
module.exports = router;