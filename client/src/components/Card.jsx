import React from 'react';
import { Container,Icon, Name, Information, HealtyPanel, HealtyIcon, Li, Detail, Ul } from '../css/Card.css.js';
import { Link } from 'react-router-dom';
import img2 from '../img/healtlyIcon.png'
import {getRecipeDetail} from '../redux/actions/index.js'
import { useDispatch } from 'react-redux'

const Card =({id, name,img, typediets, health_score}) => {
    const dis = useDispatch();
    return (
            <Container>
                    <Information color={Math.floor(Math.random() * ((9+1)-0)+0)}>
                    <Icon src={img} alt='food im'/>
                    </Information>
                        <Detail>
                        <Link to ={`/recipe/${id}`} >
                            <Name onClick={()=>dis(getRecipeDetail(id))}>{name}</Name>
                        </Link>
                            <HealtyPanel>
                                <HealtyIcon src={img2} alt='food im'/>
                                <h5>{health_score} %</h5>
                            </HealtyPanel>
                            <Ul>
                                {typediets.map(e => <Li key={e}>{e},</Li>)}
                            </Ul>
                        </Detail>
            </Container>
    );
}
  
export default Card;

/**
 * if(e.target.type){
            setInput({
                input,
                [e.target.name]: e.target.value
            })
        }else{
        }

 */