import React from 'react';
import {Container} from '../css/NavBar.css.js'
import SearchBar from './SearchBar.jsx';

const NavBar = () => {
  return (
    <Container>
        <h1>FoodApp</h1>
        <SearchBar/>
    </Container>
  );
};

export default NavBar;