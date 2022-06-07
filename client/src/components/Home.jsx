import React from 'react';
import { Container, Grid, ButtonsDiv, ButtonNext, ButtonPrev } from '../css/Home.css.js';
import Card from './Card.jsx'
import NavBar from '../components/NavBar'

const Home = (props) => {
  if(props.recipes && props.recipes.length > 0){
    return (
    <Container>
        <NavBar/>
        <Grid>
          {props.recipes.map(c => <Card 
              key ={c.id}
              id={c.id}
              name = {c.name}
              img = {c.img}
              typediets = {c.typediets.map(e => e.name)}
              health_score = {c.health_score}
            /> )}
        </Grid>
        <ButtonsDiv>
            <ButtonPrev onClick={props.prevHandler}></ButtonPrev>
            <p>Pagina: {props.currentPage}</p>
            <ButtonNext onClick={props.nextHandler}></ButtonNext>
        </ButtonsDiv>
      </Container>
    );
}else{
  return (
    <Container>
      <h1>Not Found Recipes</h1>
    </Container>
  );
}
}

export default Home;