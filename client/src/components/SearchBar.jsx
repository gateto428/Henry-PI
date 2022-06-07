import React from "react";// {onSearch}
import {Form, Button, Input} from '../css/SearchBar.css.js';

const SearchBar = () => {
  //const [city, setCity] = useState('');
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();//no refreque la pagina
     // onSearch(city);
    }}>
      <Input
        type="text"
        placeholder="Name"
        //value={city}
       // onChange={e => setCity(e.target.value)}
      />
     <Button type="submit" value="Search" />
    </Form>
  );
}

export default SearchBar;