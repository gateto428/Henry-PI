import React from 'react';
import img from '../img/loader.gif';
import { Container } from '../css/Loader.css';

const Loader =() => {
    return (
        <Container>
            <img src={img} alt="Loader Im" />
        </Container>
    )
}

export default Loader;