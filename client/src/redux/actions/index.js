import axios from 'axios';
const HOST = 'http://localhost:3001/';
export const GET_All_RECIPES = 'GET_All_RECIPES';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const GET_RECIPES_TITLE = 'GET_RECIPES_TITLE';
export const GET_ALL_DIETS = 'GET_ALL_DIETS';
export const POST_RECIPE = 'POST_RECIPE'
export const ERROR = 'ERROR';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NONE = 'NONE';
export const FILTER_DIET = 'FILTER_DIET';
export const SORT = 'SORT'; 
export const ITEM_PER_PAGE = 9;


/**
 * get Full recipes api
 * @returns funtion call
 */

// fecth nativo axios libreria 
export function getFullRecipes(){
    return async function(dispatch){
        try {
            let response = await (axios.get(HOST+'recipes/')); //{recipes: response.data, 
            //currentPage: 0}}
            return dispatch({type: GET_All_RECIPES, payload: 
                {recipes: response.data, 
                currentPage: 0}});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
       
    }
}
//Get Recipe per ID
export function getRecipeDetail(id){
    return function(dispatch){
        return axios.get(HOST+`recipes/${id}`)
        .then(response => response.data)
        .the(data  => {
            dispatch({type: GET_RECIPE_DETAIL, payload: data});
        });
    }
}
//get Recipes per title dispatch({type: GET_RECIPES_TITLE, payload: data});
export function getRecipesTitle(title){
    return async function(dispatch){
        try {
            let response = await (await axios.get(HOST+`recipes?name=${title}`));
            return dispatch({type: GET_RECIPES_TITLE, 
                payload: {recipes: response.data, 
                currentPage: 0}});
        } catch (error) {
            return dispatch({type: ERROR, payload: error.response.data});
        }
       
    }
}
//get diets
export function getAllDiets(){
    return function(dispatch){
        return axios.get(HOST+`typeDiet/`)
        .then(response => response.data)
        .the(data  => {
            dispatch({type: GET_ALL_DIETS, payload: data});
        });
    }
}

export function postRecipe(payload){
    return function(dispatch){
        return axios.post(HOST+`recipes`, payload)
        .then(response => response.data)
        .the(data  => {
            dispatch({type: POST_RECIPE, payload: data});
        });
    }
}
//next page
export function nextHandler(recipes, currentPage){
    return function(dispatch){
        let totalElements = recipes.length;
        let nextPage = currentPage+1;
        let firstIndex = nextPage * ITEM_PER_PAGE;
        let endIndex = firstIndex + ITEM_PER_PAGE;
        if(firstIndex >= totalElements) return dispatch({type: NONE, payload:{}});
        return dispatch({type: NEXT_PAGE, payload:{item: recipes.slice(firstIndex, endIndex),
            currentPage: nextPage
        }});
    }
}
//previous page
export function prevHandler(recipes, currentPage){
    return function(dispatch){
        let prevPage = currentPage-1;
        if(prevPage < 0) return dispatch({type: NONE, payload:{}});
        let firstIndex = prevPage * ITEM_PER_PAGE;
        let endIndex = currentPage * ITEM_PER_PAGE;
        return dispatch({type: PREVIOUS_PAGE, payload:{item: recipes.slice(firstIndex, endIndex),
            currentPage: prevPage
        }});
    }
}

//filter per diet
export function filterPerDiet(diet){
    return async function (dispatch){
        return dispatch({type: FILTER_DIET, payload: diet});
    }
}

//SORT
export function sort(sort){
    return async function (dispatch){
        return dispatch({type: SORT, payload: sort});
    }
}