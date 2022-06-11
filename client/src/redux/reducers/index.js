import { GET_All_RECIPES, 
    GET_RECIPE_DETAIL, 
    GET_RECIPES_TITLE, 
    GET_ALL_DIETS, 
    POST_RECIPE, ITEM_PER_PAGE, NEXT_PAGE, PREVIOUS_PAGE, FILTER_DIET, SORT } from "../actions/index.js";
    
//State Global Init 
const initialState = {
     recipes: [],
     recipesFilter: [],
     filter: false,
     recipe: {},
     diets: [],
     post: {},
     item: [], // casntidad de rutas por pagina  9 elementos
     currentPage: 0 // pagina en la que se encuentra
 };

function rootReducer(state = initialState, action){
    if(action.type === GET_All_RECIPES){
        return{
            ...state,
            recipes: action.payload.recipes,
            item: action.payload.recipes.slice(0, ITEM_PER_PAGE),
            recipesFilter: [],
            filter: false,
            currentPage: action.payload.currentPage,
            recipe: {}
        }
    }
    if(action.type === GET_RECIPE_DETAIL){
        return{
            ...state,
            filter: false,
            recipe: action.payload
        }
    }
    if(action.type === GET_RECIPES_TITLE){
        return{
            ...state,
            recipes: action.payload.recipes,
            item: action.payload.recipes.slice(0, ITEM_PER_PAGE),
            recipesFilter: [],
            filter: false,
            currentPage: action.payload.currentPage
        }
    }
    if(action.type === GET_ALL_DIETS){
        return{
            ...state,
            diets: action.payload,
            filter: false,
        }
    }
    if(action.type === POST_RECIPE){
        return{
            ...state,
            post: action.payload,
        }
    }
    if(action.type === NEXT_PAGE){
            return{
                ...state,
                item: action.payload.item,
                currentPage: action.payload.currentPage
            }
    }
    if(action.type === PREVIOUS_PAGE){
        return{
            ...state,
            item: action.payload.item,
            currentPage: action.payload.currentPage
        }
    }
    if(action.type === FILTER_DIET){
        if(action.payload !== 'all'){
            let filter = state.recipes.filter(e =>{
                return e.typediets?.find(i => {
                    return i.name.includes(action.payload.replace("-", " ")); 
                })
            })
            return{
                ...state, //e.type.includes(action.payload)
                recipesFilter: filter,
                item: filter.slice(0, ITEM_PER_PAGE),
                filter: true,
                currentPage: 0
            }
        }else{
            return{
                ...state, //e.type.includes(action.payload)
                recipesFilter: [],
                item: state.recipes.slice(0, ITEM_PER_PAGE),
                filter: false,
                currentPage: 0
            }
        }
    }
    if(action.type === SORT){
        if(state.filter && action.payload !== 'no-sort'){
            let filter = sort(state.recipesFilter, action.payload);
            return{
                ...state, //e.type.includes(action.payload)
                rrecipesFilter: filter,
                item: filter.slice(0, ITEM_PER_PAGE),
                filter: true,
                currentPage: 0
            }   
        }else if(!state.filter && action.payload !== 'no-sort'){
            let filter = sort(state.recipes, action.payload);
            return{
                ...state, //e.type.includes(action.payload)
                item: filter.slice(0, ITEM_PER_PAGE),
                currentPage: 0
            }  
            
        }
    }
    return state;
}

const sort = (recipesFilter, action) =>{
     let filter = recipesFilter.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                  }
                  return -1;
            });
            if(action === 'desc-alf'){
                
                filter = recipesFilter.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                      }
                      return -1;
                });
            }
            if(action === 'asec-hs'){
                filter  = recipesFilter.sort((a, b) => {
                    if (a.health_score > b.health_score) {
                        return 1;
                      }
                      return -1;
                });
            }
            if(action === 'desc-hs'){
                filter  = recipesFilter.sort((a, b) => {
                    if (a.health_score < b.health_score) {
                        return 1;
                      }
                      return -1;
                });
            }
        return filter
}

export default rootReducer;