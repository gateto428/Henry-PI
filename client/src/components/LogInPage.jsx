import {Container, LogingContainer, Form, Input, Button} from '../css/LogIn.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getFullRecipes } from '../redux/actions/index.js'



const LogInPage =() => {
  const dispatch =  useDispatch()
  const [name, setname] = useState('');

  const handleSubmit = ()=>{
    alert(`Hola ${name}`)
    dispatch(getFullRecipes());
    //() => setname()
  }
 
  return (
    <Container>
      <LogingContainer>
        <h1>Log in</h1>
        <Form onSubmit={e =>
         e.preventDefault()
        }>
          <Input 
            type="text"
            placeholder="Your Name"
            onChange={event => setname(event.target.value)} />
          <Link to="/home">
            <Button type="submit" value="Log In" onClick={ () => handleSubmit()}/>
          </Link>
        </Form>
      </LogingContainer>
    </Container>
  );
}

export default LogInPage;
