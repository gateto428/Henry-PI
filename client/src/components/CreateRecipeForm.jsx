import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Full, Nav, ButtonBack, Form, Title, Summary, Url, DietsPanel, DivCheck, LabelC, Div, P, ButtonAddStep, ButtonCreate} from '../css/Form.css.js'

const CreateRecipeForm = () => {
    function onChange() {
        let i = document.querySelector('#sliderV');
        let o = document.querySelector('#slider');
        o.innerHTML = i.value;
      }
    return (
        <Full> 
            <Nav>
                <Link to="/home">
                    <ButtonBack/>
                </Link>
            </Nav>
            <Container>
            <P>Create recipe</P>
                <Form>
                <Div>
                    <Title 
                        type="text"
                        placeholder="Title Recipe"
                        /><br/>
                    <Summary 
                        type="text"
                        placeholder="Summary"
                        /><br/>
                    <label>Health Score: <label id='slider'>0</label></label>
                    <input 
                        id = 'sliderV'
                        type="range"
                        min="0" max="100"
                        onChange={() => onChange()}
                        /><br/>
                    <Url  
                        type="text"
                        placeholder="Image Url"
                        /><br/>
                    <DietsPanel>
                        <h3>Selected type diets</h3>
                        <DivCheck>
                            <LabelC><input type="checkbox" id="cbox1" value="gluten-free" />Gluten Free</LabelC>
                            <LabelC><input type="checkbox" id="cbox2" value="ketogenic" />ketogenic</LabelC>
                            <LabelC><input type="checkbox" id="cbox3" value="ketogenic" />ketogenic</LabelC>
                            <LabelC><input type="checkbox" id="cbox4" value="vegetarian" />vegetarian</LabelC>
                            <LabelC><input type="checkbox" id="cbox5" value="lacto-vegetarian" />lacto vegetarian</LabelC>
                            <LabelC><input type="checkbox" id="cbox6" value="ovo-vegetarian " />ovo vegetarian </LabelC>
                            <LabelC><input type="checkbox" id="cbox7" value="vegan" />vegan</LabelC>
                            <LabelC><input type="checkbox" id="cbox8" value="paleo" />paleo</LabelC>
                            <LabelC><input type="checkbox" id="cbox9" value="low-fodmap" />low FODMAP</LabelC>
                            <LabelC><input type="checkbox" id="cbox10" value="whole30" />whole30</LabelC>
                        </DivCheck>
                    </DietsPanel>
                </Div>
                <Div>
                    <h3>Steps</h3>
                    <Summary 
                        type="text"
                        placeholder="Step"
                        />
                    <ButtonAddStep type="button" value="Add Step"/>
                    <ButtonCreate type="submit" value="Create Recipe" />
                </Div>
                </Form>
            </Container>
         </Full>
      );
}

/*
gluten-free
 ketogenic
 vegetarian
 lacto-vegetarian
 ovo-vegetarian 
 vegan
 paleo #8c9d3f
 low-fodmap #d3ec4e
 whole30*/
export default CreateRecipeForm;