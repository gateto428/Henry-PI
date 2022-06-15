import React, { useEffect }  from "react";
import {Nav, ButtonBack} from '../css/Form.css.js';
import { Link } from 'react-router-dom'; 
import { connect } from "react-redux";
import { Container, Info, Summary, Icon, Ul, ButtonD, DivButtonD } from "../css/Recipe.css.js";
import Loader from "./Loader.jsx";
import {deleteRecipe, getRecipeDetail} from '../redux/actions/index.js'
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";

const Recipe =(props) => {
    const dis = useDispatch();

    const deleteR = () =>{
       dis(deleteRecipe(props.recipe.id));
    }

    let { id } = useParams();
    useEffect(() => {
       dis(getRecipeDetail(id));
      }, []);

    if(Object.keys(props.recipe).length !== 0){
        return(
            <Container>
                <Nav>
                <Link to="/home">
                    <ButtonBack/>
                </Link>
                </Nav>
                <Info>
                    <DivButtonD>
                        {props.recipe.id.toString().includes('-')?<Link to="/home"><ButtonD onClick={deleteR}></ButtonD></Link>:<label></label>} 
                    </DivButtonD>
                     <h1>{props.recipe.name}</h1>
                     <Icon src={props.recipe.img} alt='food im'/>
                     <Summary>{props.recipe.summary}</Summary>
                     <ul>
                         {props.recipe.typediets?.map(e =>{
                             return <li key={e.name}>{e.name}</li>
                         })}
                     </ul>
                     <Ul>
                         <h2>Steps:</h2>
                        {props.recipe.steps?.sort((a, b)=> {
                            return a.number - b.number;
                        }).map(e =>{
                             return <Ul key={e.step}>
                                 <li>Paso: {e.number}</li>
                                 <li>{e.step}</li>
                             </Ul> 
                         })}
                     </Ul>
                </Info>
            </Container>
        );
    }else{
            return (
                <Container>
                    <Nav>
                    <Link to="/home">
                        <ButtonBack/>
                    </Link>
                    </Nav>
                    <Loader/>
                </Container>
            );
    }
    
}
function mapStateToProps(state){
    return{
        recipe: state.recipe
    }
  }
export default connect(mapStateToProps)(Recipe);