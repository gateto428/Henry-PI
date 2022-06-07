import styled from 'styled-components';
import img from '../img/BackgroudCard.jpeg'; //
import back from '../img/backIcon.png';

export const Full = styled.div`
    background-image: url(${img});
    background-repeat: 'repeat-y';
    background-size: contain;
`;

export const Nav = styled.div`
  width: 100vw;
  height: 3.5em;
  background-color: #b40001;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

export const ButtonBack = styled.button`
  width: 2.6vw;
  height: 5vh;
  margin-left: 1em;
  border-style: none;
  background-color: white;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-color:rgba(0, 0, 0, 0.0);
  &:hover {
    cursor: pointer;
  };
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.4);
    color: white;
    font-family: Papyrus;
`;

export const Form = styled.form`
    width: 95%;
    background-color:rgba(0, 0, 0, 0.6);
    margin: 0em;
    padding: 0.1em;
    padding-bottom: 0;
    border-radius: 0px 0px 30px 32px / 0px 0px 29px 33px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: nowrap;
`;

export const Title = styled.input`
    width: 40%;
    border-radius: 30px;
    border-style: double;
    padding: 1em;
    margin-top: 0px;
    text-align: center;
    font-family: Papyrus;
`;

export const Summary = styled.textarea`
    width: 90%;
    height: 8vh;
    border-radius: 30px;
    border-style: double;
    padding: 1em;
    margin: 0px;
    text-align: left;
    font-family: Papyrus;
    size: 20;
`;

export const Url = styled.input`
    width: 80%;
    border-radius: 30px;
    border-style: double;
    padding: 1em;
    margin: 0px;
    text-align: center;
    font-family: Papyrus;
`;



export const DietsPanel = styled.div`
    width: 80%;
    border-radius: 30px;
    border-style: double;
    padding: 1em;
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: Papyrus;
`;

export const DivCheck = styled.div`
    width: 100%;         
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const LabelC = styled.label`
    width: 30%;  
`;

export const Div = styled.div`
    width: 50%; 
    margin: 2em;   
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`;

export const P = styled.p`
    display: flex;
    width: 95%;
    background-color:rgba(0, 0, 0, 0.6);
    border-radius: 18px 24px 0px 0px / 20px 24px 2px 0px;
    margin-top: 0.1em;
    margin-bottom: 0;
    padding: 0.1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 2em;
`;

//

export const ButtonAddStep = styled.input`
    width: 30%;
    border: thin;
    margin-top: 1em;
    margin-left: 1em;
    border-radius: 30px;
    font-size: 1em;
    padding: 0.4em;
    text-align: center;
    font-family: Papyrus;
    color: #ffffff;
    background-color: #4c4dcc;
    &:hover {
    cursor: pointer;
    };
`;

export const ButtonCreate = styled.input`
    width: 80%;
    border: thin;
    margin-top: 1em;
    margin-left: 1em;
    border-radius: 30px;
    font-size: 1em;
    padding: 0.4em;
    text-align: center;
    font-family: Papyrus;
    color: #ffffff;
    background-color: #49be25;
    &:hover {
    cursor: pointer;
    };
`;