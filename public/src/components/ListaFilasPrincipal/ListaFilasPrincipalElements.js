import { Link } from "react-router-dom";
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
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;

  
  @media screen and (max-width: 640px) {
    height: 100%;
  }
`;

export const Titulo = styled.label`
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
color: #233f78;
font-weight: 500;
margin-top: 20px;

@media screen and (max-width: 640px) {
  font-size: 22px;
  font-weight: 500;
}
`

export const BtnDiv = styled.div`

display: block;
align-items: center;
background-color: white;
width: 50%;
min-width: 400px;
max-width: 1000px;
height: 70%;
border: rgb(0, 0, 0);

border-width: 5px;
border-radius: 8px;
padding-bottom: 10px;
overflow: hidden;

overflow-y: auto;@media only screen and (max-width: 640px) {
  min-width: 100%;
  height: 100%;
  margin-bottom: 50px
}
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
overflow-y: auto;
margin-bottom: 20px;
margin:20px auto 0 auto;
`;

export const Filas = styled.div`
display:flex;
align-items: center;
position: relative;
color: black;
background-color: #233f78;
width: 80%;
max-width: 1000px;
margin-top: 4%;
margin-left: 10%;
box-shadow: 0 5px 7px 0 rgba(0,0,0, 0.75);
border-radius: 8px;
cursor: pointer;

@media screen and (min-width: 1100px) {
  font-size: 10px;
}

@media screen and (max-width: 1101px) {
  font-size: 8px;
}

&:hover {
  transition: all 0.2s ease-in-out;
  border: 1px solid rgb(6, 130, 200);
}
`;

export const FormBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
<<<<<<< HEAD
margin-bottom: 20px;
padding: 4px;
=======
  margin-bottom: 20px;
>>>>>>> 55f43fafaa4d43482f5575bcee1a180ccdfa20d1
`;

export const FormBtnLink = styled(Link)`
  border-radius: 10px;
  background: #233f78;
  white-space: nowrap;
  margin-top: 30px;
  padding: 10px 32px;
  color: #fff;
  font-size: 16px;
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

