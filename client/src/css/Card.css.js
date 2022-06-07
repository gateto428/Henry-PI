import styled from 'styled-components';
//import css from '@styled-system/css'

export const Container = styled.div`
  width: 31%;
  height: 25vh;
  border-radius: 25px;
  background-color: #fcfbf7;
  margin-right: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; 
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  box-shadow: 5px 10px 18px #888888;
`;

export const Icon = styled.img`
    width: 70%;
    height: 10vh;
    border-radius: 30%;
    border: 1px solid #ddd;
    padding: 5px;
    margin-left: 2em;
`;

export const Information  = styled.div`
    margin: 0;
    width: 25%;
    height: 25vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #cc4c4d;
    border-radius: 34% 100% 100% 23% / 35% 100% 100% 22%;
`;

export const Name = styled.p`
    margin: 0px;
    color: black;
    font-size: 0.8em;
    text-align: center;
`;

export const HealtyPanel = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const HealtyIcon = styled.img`
    width: 10%;
    border-radius: 30%;
    border: 1px solid #ddd;
    padding: 5px;
    margin-top: 0px;
    margin-right: 1em;
    margin-left: 1em;
`;

export const Li = styled.li`
    list-style-type: none; 
    font-size: 0.7em;
    margin: 0;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    margin-left: -3em;
`;

export const Detail = styled.div`
    margin-left: 1em;
    width: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: center;
    align-items: left;
`;