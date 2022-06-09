import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesTitle } from '../redux/actions/index.js'
import {Form, Button, Input} from '../css/SearchBar.css.js';

const SearchBar = () => {
  const dispatch =  useDispatch()
  const [name, SetName]= useState("")

  //detecta cambios en tiempo real sobre el imput
  const handleChange = (e)=>{
    e.preventDefault()
    SetName(e.target.value)
    }

    //despacha la callB detRecipes
    const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(getRecipesTitle(name));
      SetName('');   
    }

  return (
    <Form onSubmit={e => handleSubmit(e)}> 
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => handleChange(e)}
      />
     <Button type="submit" value="Search" onClick={e => handleSubmit(e)}/>
    </Form>
  );
}

export default SearchBar;