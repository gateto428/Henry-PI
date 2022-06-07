import styled from 'styled-components';
import img from '../img/backgroundApp.jpeg';
import css from '@styled-system/css'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const  LogingContainer = styled.div`
  background-color: white;
  width: 30vw;
  margin: 0px auto;
  border-radius: 10px;
`;

export const Form = styled.form`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input(
  css({
  width: '90%',
  borderRadius: '20px',
  height: '3em',
  marginBottom: '1em',
  textAlign: 'center',
  borderStyle: 'double',
})
);

export const Button = styled.input`
  width: 93%;
  height: 3em;
  border-radius: 20px;
  margin-bottom: 3em;
  background-color: #eca64e;
  color: #ffffff;
  border-style: none;
  font-weight: bold;
  &:hover {
    background-color: #105b72c2;
    cursor: pointer;
  };
  `;