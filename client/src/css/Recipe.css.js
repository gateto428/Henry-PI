import styled from "styled-components";
import img from '../img/BackgroudCard.jpeg';
import button from '../img/deleteButton.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh !important;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    justify-items: center;
`;

export const Info = styled.div`
    margin: 1em;
    width: 90%;
    height: 75vh;
    background-color:rgba(0, 0, 0, 0.6);
    color: white;
    font-family: Papyrus;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 47px 44px 48px 45px / 41px 40px 40px 44px;
    padding: 2em;
    overflow: scroll;
`;

export const Summary = styled.p`
    width: 100%;
    border-radius: 30px;
    border-style: double;
    padding: 1em;
    margin: 0px;
    text-align: left;
    size: 20;
    background-color:rgba(0, 0, 0, 0.8);
`;

export const Icon = styled.img`
    width: 40%;
    height: 40vh;
    border-radius: 20%;
    border: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 1em;
`;

export const Ul = styled.ul`
    display: block;
    padding: 1em;
    list-style: none;
    size: 20;
    background-color:rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    border-style: double;
    margin-bottom: 0.5em;
`;

export const ButtonD = styled.button`
    width: 2.7vw;
    height: 5vh;
    margin-right: 1em;
    border-style: none;
    background-color: white;
    background-image: url(${button});
    background-repeat: no-repeat;
    background-size: cover;
    background-color:rgba(0, 0, 0, 0.0);
    &:hover {
    cursor: pointer;
    };
`;

export const DivButtonD = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
`;
