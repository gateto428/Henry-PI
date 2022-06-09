import React from 'react';
import { Container,Icon, Name, Information, HealtyPanel, HealtyIcon, Li, Detail, Ul } from '../css/Card.css.js';
import { Link } from 'react-router-dom';
import img2 from '../img/healtlyIcon.png'

const Card =({id, name,img, typediets, health_score}) => {
    return (
            <Container key={id}>
                
                    <Information diet={typediets[0]}>
                    <Icon src={img} alt='food im'/>
                    </Information>
                        <Detail>
                        <Link to ={`/recipe/${id}`}>
                            <Name>{name}</Name>
                        </Link>
                            <HealtyPanel>
                                <HealtyIcon src={img2} alt='food im'/>
                                <h5>{health_score} %</h5>
                            </HealtyPanel>
                            <Ul>
                                {typediets.map(e => <Li>{e},</Li>)}
                            </Ul>
                        </Detail>
                    
            </Container>
    );
}
  
export default Card;