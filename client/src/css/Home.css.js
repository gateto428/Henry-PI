import styled from 'styled-components';
//import css from '@styled-system/css'b50000 background-color: #ffff;
import next from '../img/next.png';
import previus from '../img/previous.png';
import img from '../img/BackgroudCard.jpeg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color:rgba(0, 0, 0, 0.4);
`;

export const ButtonsDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color:rgba(0, 0, 0, 0.4);
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
  background-color:rgba(0, 0, 0, 0.0);
  &:hover {
    cursor: pointer;
  };
`;

export const P = styled.p`
  background-color:rgba(0, 0, 0, 0.6);
  color: white;
  font-weight: bold;
  font-size: 1em;
  padding: 0.3em;
  border-radius: 30px;
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
  background-color:rgba(0, 0, 0, 0.0);
  &:hover {
    cursor: pointer;
  };
`;