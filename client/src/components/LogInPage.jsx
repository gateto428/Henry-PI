import {Container, LogingContainer, Form, Input, Button} from '../css/LogIn.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const LogInPage =() => {
  const [name, setname] = useState('');
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
            <Button type="submit" value="Log In" onClick={() => setname(alert(`Hola ${name}`))}/>
          </Link>
        </Form>
      </LogingContainer>
    </Container>
  );
}

export default LogInPage;
