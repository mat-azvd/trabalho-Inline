import {Link} from "react-router-dom";
import styled from "styled-components/";


export const MainSection = styled.div`

display: flex;
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
  height: 100vh;
  position: relative;
  z-index: 1;
  
`;

export const Titulo = styled.label`
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
`

export const BtnDiv = styled.div`

display: block;
align-items: center;
background-color: white;
width: 50%;
min-width: 300px;
max-width: 1000px;
height: 50%;
border: rgb(0, 0, 0);


border-width: 5px;
border-radius: 8px;
padding-bottom: 10px;

`

export const Div1 = styled.div`

display: block;
align-items: center;
color: black;
background-color: white;
width: 100%;
max-width: 1000px;
height: 70%;
border: rgb(0, 0, 0);
border-width: 5px;
border-radius: 8px;
padding-bottom: 10px;

overflow: hidden;
overflow-y: scroll;


margin-bottom: 20px;
margin:20px auto 0 auto;

    
    

`;

export const Filas = styled.div`

align-items: center;
position: relative;
color: black;
background-color: #1976d2;
width: 80%;
max-width: 1000px;
height: 30%;
margin-top: 4%;
margin-left: 10%;

box-shadow: 0 5px 7px 0 rgba(0,0,0, 0.75);

border-radius: 8px;
font-size: 10px;

&:hover {
  transition: all 0.2s ease-in-out;
  border: 3px solid rgb(0, 165, 226);
}



`;

export const FormBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const FormBtnLink = styled(Link)`
  border-radius: 10px;
  background: #233f78;
  white-space: nowrap;
  margin-top: 30px;
  padding: 10px 32px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1976d2;
    color: #fff;
  }
`;

