import {Link} from "react-router-dom";
import styled from "styled-components/";

export const DivModal = styled.div`

position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 10;
background-color: rgba(0,0,0, 0.5);
display: flex;
justify-content: center;
aligh-items: center;

`;

export const Div2Modal = styled.div`

display: flex;
position:relative;
background-color: #fff;
color: #000;
width: 60%;
height: 60%;
border-radius: 10px;

margin: 80px auto 0 auto;
justify-content: center;
aligh-items: center;

`;

export const BotaoModal = styled.button`

margin-top: 50%;
position: relative;
width: 80px;
height: 40px;
padding: 5px;
border-width: 10px;
border-radius: 20px;
border: rgb(0, 0, 0);
background: #fff;
transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #1976d2;
    color: #fff;
  }

`