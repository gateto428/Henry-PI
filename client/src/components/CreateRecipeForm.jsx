import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Full, Nav, ButtonBack, Form, Title, Summary, Url, DietsPanel, DivCheck, LabelC, Div, P, ButtonAddStep, ButtonCreate, Error, Ul} from '../css/Form.css.js'
import {postRecipe} from '../redux/actions/index.js'
import { useDispatch } from 'react-redux'

const CreateRecipeForm = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
          name: '',
          summary: '',
          health_score: 0,
          img: '',
          type: [],
          steps: [],
          stepActual: ''
      });

    const [error, setError] = useState({vacio: true});

     const handleStateChange = (e) => {
        if(e.target.type !== 'checkbox'){
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }else{
            let arrAux;
            if(e.target.checked){
               arrAux = input.type
               arrAux.push(e.target.value)
            }else{
                arrAux = input.type
                arrAux = arrAux.filter(i => {
                    return i  !==  e.target.value;
                })
            }
            setInput({
                ...input,
                type: arrAux
            })
        }
        setError(validate(input));
     }


     const validate = (input) =>{
        let error = {};
        if(!input.name){
            error.name = 'Name Is required'
            return error;
        }
        if(!input.summary){
            error.summary = 'Summary Is required'
            return error;
        }
        if(!input.img){
            error.img = 'Img Is required'
            return error;
        }if(!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(input.img)){
            error.img = 'Url invalide'
            return error;
        }
        if(input.type.length === 0){
            error.type = 'Select at least one diet'
            return error;
        }
        if(input.steps.length === 0){
            error.steps = 'The recipe must contain at least one step'
            return error;
        }
        return error;
     }


     const addStep = () => {
         if(input.stepActual !== ''){
            let arrAux = input.steps; //input.stepActual
            arrAux.push({
                number: arrAux.length+1,
                step: input.stepActual
            })
           setInput({
               ...input,
               steps: arrAux,
               stepActual: ''
           })
           setError(validate(input));
         }else{
             setError({
                 ...error,
                 steps: 'Campo vacio'
             })
         }
         
     }

    const onSubmit = (e) => {
        e.preventDefault();
        setError(validate(input));
        if(Object.entries(error).length === 0){
            delete input.stepActual
            dispatch(postRecipe(input))
            setInput({
                name: '',
                summary: '',
                health_score: 0,
                img: '',
                type: [],
                steps: [],
                stepActual: ''
            })
        }else{
            alert('Check the form, errors present')
        }
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
                <Form onSubmit={onSubmit}>
                <Div>
                    <Title 
                        type="text"
                        placeholder="Title Recipe"
                        value = {input.name}
                        name = 'name'
                        onChange = {handleStateChange}
                        /><br/>
                    <Error>{error.name}</Error>
                    <Summary 
                        type="text"
                        placeholder="Summary"
                        value = {input.summary}
                        name = 'summary'
                        onChange = {handleStateChange}
                        /><br/>
                    <Error>{error.summary}</Error>
                    <label>Health Score: {input.health_score}</label>
                    <input 
                        type="range"
                        min= "0" max="100"
                        value = {input.health_score}
                        name = 'health_score'
                        onChange = {handleStateChange}
                        /><br/>
                    <Url  
                        type="text"
                        placeholder="Image Url"
                        value = {input.img}
                        name = 'img'
                        onChange = {handleStateChange}
                        /><br/>
                    <Error>{error.img}</Error>
                    <DietsPanel>
                        <h3>Selected type diets</h3>
                        <DivCheck>
                            <LabelC><input type="checkbox"  value="gluten-free"  onChange = {handleStateChange}/>Gluten Free</LabelC>
                            <LabelC><input type="checkbox" value="ketogenic" onChange = {handleStateChange}/>ketogenic</LabelC>
                            <LabelC><input type="checkbox" value="vegetarian" onChange = {handleStateChange} />vegetarian</LabelC>
                            <LabelC><input type="checkbox"  value="lacto-vegetarian" onChange = {handleStateChange} />lacto vegetarian</LabelC>
                            <LabelC><input type="checkbox" value="ovo-vegetarian"  onChange = {handleStateChange} />ovo vegetarian </LabelC>
                            <LabelC><input type="checkbox"  value="vegan" onChange = {handleStateChange} />vegan</LabelC>
                            <LabelC><input type="checkbox"  value="paleo" onChange = {handleStateChange} />paleo</LabelC>
                            <LabelC><input type="checkbox" value="low-fodmap" onChange = {handleStateChange} />low FODMAP</LabelC>
                            <LabelC><input type="checkbox" value="whole30" onChange = {handleStateChange} />whole30</LabelC>
                            <Error>{error.type}</Error>
                        </DivCheck>
                    </DietsPanel>
                </Div>
                <Div>
                    <h3>Steps</h3>
                    <DietsPanel>
                        <Ul>
                            {input.steps.map(i => <li key={i.number}>{i.number} {i.step}</li>)}
                        </Ul>
                    </DietsPanel>
                    <Summary 
                        type="text"
                        placeholder="Step"
                        value = {input.stepActual}
                        name = 'stepActual'
                        onChange = {handleStateChange}
                        />
                    <Error>{error.steps}</Error>
                    <ButtonAddStep type="button" value="Add Step" onClick={addStep}/>
                    <ButtonCreate type="submit" value="Create Recipe" />
                </Div>
                </Form>
            </Container>
         </Full>
      );
}

export default CreateRecipeForm;