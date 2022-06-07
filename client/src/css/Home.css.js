import styled from 'styled-components';
//import css from '@styled-system/css'b50000
import next from '../img/next.png';
import previus from '../img/previous.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: #ffff;
`;

export const ButtonsDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonNext = styled.button`
  width: 2.6vw;
  height: 5vh;
  margin-left: 1em;
  border-style: none;
  background-color: white;
  background-image: url(${next});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    cursor: pointer;
  };
`;

export const ButtonPrev = styled.button`
  width: 2.6vw;
  height: 5vh;
  margin-right: 1em;
  border-style: none;
  background-color: white;
  background-image: url(${previus});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    cursor: pointer;
  };
`;