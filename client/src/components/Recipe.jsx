import React from "react";
import {Nav, ButtonBack} from '../css/Form.css.js'
import { Link } from 'react-router-dom';

const Recipe =() => {
    return(
        <div>
            <Nav>
            <Link to="/home">
                <ButtonBack/>
            </Link>
            </Nav>
            <div>hola soy la receta</div>
        </div>
    );
}

export default Recipe;