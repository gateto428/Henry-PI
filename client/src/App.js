import React, { useState } from 'react';
import { Routes,  Route} from "react-router-dom";
import LogIn from "./components/LogInPage.jsx";
import Home from './components/Home.jsx';
import Form from './components/CreateRecipeForm.jsx';
const ITEM_PER_PAGE = 9;

function App() {
  const  prueba = [{
    id: 1,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: " 1 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          name: "gluten free"
      },
      {
          name: "dairy free"
      },
      {
          name: "lacto ovo vegetarian"
      },
      {
          name: "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 2,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "2 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "ketogenic"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 3,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "3 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "vegetarian"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 4,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "4 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          name: "ovo vegetarian"
      },
      {
          name: "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 5,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "5 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "lacto vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 6,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "6 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 7,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "7 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          name: "paleo"
      },
      {
          name: "dairy free"
      },
      {
          name: "lacto ovo vegetarian"
      },
      {
          name: "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 8,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "8 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "low fodmap"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 9,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "9 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "whole30"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 10,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: " 10 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          name: "gluten free"
      },
      {
          name: "dairy free"
      },
      {
          name: "lacto ovo vegetarian"
      },
      {
          name: "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 11,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "11 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 12,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "12 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 13,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "13 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          name: "gluten free"
      },
      {
          name: "dairy free"
      },
      {
          name: "lacto ovo vegetarian"
      },
      {
          name: "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 14,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "14 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 15,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "15 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 16,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "16 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          name: "gluten free"
      },
      {
          name: "dairy free"
      },
      {
          name: "lacto ovo vegetarian"
      },
      {
          name: "vegan"
      }  
    ],
  health_score: 76,
  },
  {
    id: 17,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "17 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 18,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "18 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  },{
    id: 19,
    img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    name: "19 Cauliflower, Brown Rice, and Vegetable Fried Rice",
    typediets: [
      {
          "name": "gluten free"
      },
      {
          "name": "dairy free"
      },
      {
          "name": "lacto ovo vegetarian"
      },
      {
          "name": "vegan"
      }  
    ],
  health_score: 76,
  }];

  //const [dataApi, setDataApi] = useState(prueba); 
  const [item, setItems] = useState([...prueba].splice(0, ITEM_PER_PAGE))
  const [currentPage, setCurrentPage] = useState(0); 

  const nextHandler = ()=>{
    let totalElements = prueba.length;
    let nextPage = currentPage+1;
    let firstIndex = nextPage * ITEM_PER_PAGE;
    if(firstIndex >= totalElements) return;
    setItems([...prueba].splice(firstIndex, ITEM_PER_PAGE))
    setCurrentPage(nextPage);
  }

  const prevHandler = ()=>{
    let prevPage = currentPage-1;
    if(prevPage < 0) return;
    let firstIndex = prevPage * ITEM_PER_PAGE;
    setItems([...prueba].splice(firstIndex, ITEM_PER_PAGE))
    setCurrentPage(prevPage);
  }
  return (
    <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/home" element={<Home currentPage={currentPage+1}  recipes={item} nextHandler={nextHandler} prevHandler= {prevHandler}/>} />
        <Route path="/form" element={<Form/>}/>
    </Routes>
  );
}

export default App;