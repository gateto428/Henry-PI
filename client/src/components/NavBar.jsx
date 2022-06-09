import React from 'react';
import {Container, P, Select, Button} from '../css/NavBar.css.js'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom'; //filterPerDiet
import { useDispatch } from 'react-redux'
import { filterPerDiet, sort } from '../redux/actions/index.js'

const NavBar = () => {
  const dispatch =  useDispatch();

  return (
    <Container>
        <P>FoodApp</P>
        <Select id="diets" onChange = { e =>  {
           e.preventDefault();
          return dispatch(filterPerDiet(e.target.value))}
        }>
          <option value="all">All</option>
          <option value="gluten-free">gluten free</option>
          <option value="ketogenic">ketogenic</option>
          <option value="vegetarian">vegetarian</option>
          <option value="lacto">lacto vegetarian</option>
          <option value="ovo">ovo vegetarian</option>
          <option value="fodmap">low FODMAP</option>
          <option value="vegan">vegan</option>
          <option value="paleo">paleo</option>
          <option value="whole">whole30</option>
        </Select>
        <Select id="sort" onChange = { e =>  {
           e.preventDefault();
          return dispatch(sort(e.target.value))}
          }>
          <option value="no-sort">Sort</option>
          <option value="asec-alf">Ascending Alphabetically</option>
          <option value="desc-alf">Descending alphabetically</option>
          <option value="asec-hs">Ascending health score</option>
          <option value="desc-hs">Descending health score</option>
        </Select>
        <Link to="/form">
          <Button>Create</Button>
        </Link>
        <SearchBar/>
    </Container>
  );
};

export default NavBar;