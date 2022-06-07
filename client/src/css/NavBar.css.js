import styled from 'styled-components';
//import css from '@styled-system/css'

export const Container = styled.div`
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

export const P = styled.p`
  color: white;
  margin-left: 1em;
  font-family: Papyrus;
  font-size: 2em;
`;

export const Select = styled.select`
  margin-left: 1em;
  border-radius: 30px;
  font-size: 1em;
  padding: 0.2em;
  text-align: center;
  font-family: Papyrus;
`;

export const Button = styled.button`
  width: 100%;
  border: thin;
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
/*
gluten-free
 ketogenic
 vegetarian
 lacto-vegetarian
 ovo-vegetarian #00b4b3
 vegan
 paleo #8c9d3f
 low-fodmap #d3ec4e
 whole30*/