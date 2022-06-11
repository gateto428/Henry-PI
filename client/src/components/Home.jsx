import React, {Component } from 'react';
import { Container, Grid, ButtonsDiv, ButtonNext, ButtonPrev, P } from '../css/Home.css.js';
import Card from './Card.jsx';
import NavBar from './NavBar.jsx';
import Loader from './Loader.jsx';
import { connect } from "react-redux";  
import { nextHandler, prevHandler, getFullRecipes } from '../redux/actions/index.js';

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

  UNSAFE_componentWillMount(){
    this.props.getFullRecipes();
  }

  render() {
    if(this.props.item && this.props.item.length > 0){
      return (
       <Container>
           <NavBar/>
           <Grid>
             {this.props.item.map(c =>{
               return (<Card
                  key={c.id}
                  id = {c.id}
                  name = {c.name}
                  img = {c.img}
                  typediets = {c.typediets.map(e => e.name)}
                  health_score = {c.health_score}
                  /> )
             })}
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
            <Loader/>
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
    previousHandler: (recipes, currentPage) => dispatch(prevHandler(recipes, currentPage)),
    getFullRecipes: () => dispatch(getFullRecipes())
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Home);