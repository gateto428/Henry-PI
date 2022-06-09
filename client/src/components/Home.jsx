import React, {Component } from 'react';
import { Container, Grid, ButtonsDiv, ButtonNext, ButtonPrev, P } from '../css/Home.css.js';
import Card from './Card.jsx';
import NavBar from './NavBar';
import { connect } from "react-redux";  
import { nextHandler, prevHandler } from '../redux/actions/index.js';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: {},
      recipesFilter: [],
      item: [],
      filter: false,
      currentPage: 0
    };
  }

  hendleNextPage(e){
    e.preventDefault();
    let arry = this.props.filter? this.props.recipesFilter :  this.props.recipes;
    this.props.nextHandler(arry, this.props.currentPage, this.props.filter);
  }

  hendlePrevousPage(e){
    e.preventDefault();
    let arry = this.props.filter? this.props.recipesFilter :  this.props.recipes;
    this.props.previousHandler(arry, this.props.currentPage, this.props.filter);
  }

  render() {
    
    if(this.props.item && this.props.item.length > 0){
      return (
       <Container>
           <NavBar/>
           <Grid>
             {this.props.item.map(c => <Card 
                 key ={c.id}
                 id={c.id}
                 name = {c.name}
                 img = {c.img}
                 typediets = {c.typediets.map(e => e.name)}
                 health_score = {c.health_score}
               /> )}
           </Grid>
           <ButtonsDiv>
               <ButtonPrev onClick={e => this.hendlePrevousPage(e)}></ButtonPrev>
               <P>Pagina: {this.props.currentPage + 1}</P>
               <ButtonNext onClick={e => this.hendleNextPage(e)}></ButtonNext>
           </ButtonsDiv>
         </Container>
       );
   }else{
     return (
       <Container>
         <NavBar/>
         <h1>Not Found Recipes</h1>
       </Container>
     );
   }
  }
}

function mapStateToProps(state){
  return{
    recipes: state.recipes,
    item: state.item,
    currentPage: state.currentPage,
    filter: state.filter,
    recipesFilter: state.recipesFilter,
  }
}

function mapDispachToProps(dispatch){
  return{
    nextHandler: (recipes, currentPage) => dispatch(nextHandler(recipes, currentPage)),
    previousHandler: (recipes, currentPage) => dispatch(prevHandler(recipes, currentPage))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Home);