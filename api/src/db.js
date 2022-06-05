require('dotenv').config();
const { Sequelize } = require('sequelize');
const modelRecipe = require('./models/Recipe.js');
const modelTypeDiet = require('./models/TypeDiet.js');
const modelstep = require('./models/Step.js')


const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

modelRecipe(sequelize);
modelTypeDiet(sequelize);
modelstep(sequelize);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { recipe, typediet, step } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

recipe.belongsToMany(typediet, {through: 'TypeDiet_Recipe'});
typediet.belongsToMany(recipe, {through: 'TypeDiet_Recipe'});

recipe.hasMany(step);
step.belongsTo(recipe);
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
