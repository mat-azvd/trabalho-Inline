import {Link} from "react-router-dom";
import styled from "styled-components/";


export const MainSection = styled.div`

display: block;
align-items: center;
justify-content: center;

background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 63, 120, 1) 57%,
    rgba(0, 155, 255, 1) 100%
  );

  padding: 0 30px;
  height: 900px;
 
  
  
  
  
`;

export const Div1 = styled.div`

display: block;
align-items: center;
color: black;
background-color: white;
width: 50%;
max-width: 1000px;
height: 50%;
border: rgb(0, 0, 0);

border-width: 5px;
border-radius: 8px;
padding-bottom: 10px;

overflow: hidden;
overflow-y: scroll;



margin-bottom: 20px;
margin:auto auto 0 auto;

    
    

`;

export const Filas = styled.div`

align-items: center;
position: relative;
color: black;
background-color: rgb(0, 165, 226);
width: 80%;
max-width: 1000px;
height: 20%;
margin-top: 4%;
margin-left: 10%;

box-shadow: 0 5px 7px 0 rgba(0,0,0, 0.75);

border-radius: 8px;
font-size: 10px;

&:hover {
  transition: all 0.2s ease-in-out;
  border: 3px solid #1976d2;
}



`;

export const BotaoStyle = styled(Link)`

  position: relative;
  border-radius: 20px;
  background: #fff;
  
  

  color: #010606;
  font-size: 20px;

  transition: all 0.2s ease-in-out;

  text-decoration: none;

  padding: 10px 20px;
  
  margin:auto auto 0 200px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1976d2;
    color: #fff;
  }
`;

