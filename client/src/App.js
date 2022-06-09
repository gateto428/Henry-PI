import React from 'react';
import { Routes,  Route} from "react-router-dom";
import LogIn from "./components/LogInPage.jsx";
import Home from './components/Home.jsx';
import Form from './components/CreateRecipeForm.jsx';
import Recipe from './components/Recipe.jsx';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form/>}/>
        <Route path="/recipe/:id" element={<Recipe/>} />
    </Routes>
  );
}
/**
 * <Route exact path = '/recipes/:id'
        element={(props) => <Recipe {...props} recipe={recipes.filter(e => {
          console.log(props.match.params.id)
          return e.id === props.match.params.id;
        })} />}/>
 */
export default App;