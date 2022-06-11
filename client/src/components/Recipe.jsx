import React  from "react";
import {Nav, ButtonBack} from '../css/Form.css.js';
import { Link } from 'react-router-dom'; 
import { connect } from "react-redux";
import { Container, Info, Summary, Icon, Ul } from "../css/Recipe.css.js";
import Loader from "./Loader.jsx";

const Recipe =(props) => {
    if(Object.keys(props.recipe).length !== 0){
        return(
            <Container>
                <Nav>
                <Link to="/home">
                    <ButtonBack/>
                </Link>
                </Nav>
                <Info>
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