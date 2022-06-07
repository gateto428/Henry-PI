import React from 'react';
import {Container, P, Select, Button} from '../css/NavBar.css.js'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
        <P>FoodApp</P>
        <Select id="diets" name="distList" form="dietform">
        <option value="gluten-free">All</option>
          <option value="gluten-free">gluten free</option>
          <option value="ketogenic">ketogenic</option>
          <option value="vegetarian">vegetarian</option>
          <option value="lacto-vegetarian">lacto vegetarian</option>
          <option value="ovo-vegetarian ">ovo vegetarian</option>
          <option value="low-fodmap">low FODMAP</option>
          <option value="vegan">vegan</option>
          <option value="paleo">paleo</option>
          <option value="whole30">whole30</option>
        </Select>
        <Select id="sort" name="sortlist" form="sortform">
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