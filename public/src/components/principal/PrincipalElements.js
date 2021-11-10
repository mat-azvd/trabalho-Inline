import styled from "styled-components/";

export const MainSection = styled.div`

background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 63, 120, 1) 57%,
    rgba(0, 155, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;


  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  
`;

export const Div1 = styled.div`

display: inline-block;
justify-content: center;
align-items: center;
color: yellow;
background-color: rgb(0, 165, 226);
width: 70%;
max-width: 1000px;
height: 80%;
border: rgb(0, 100, 255);
border-style: double;
border-width: 20px;
border-radius: 8px;

overflow: hidden;
overflow-y: scroll;


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
border: 1px solid black;
border-style: double;
border-width: 5px;
border-radius: 8px;




`;

export const Botao = styled.div`

background-color: black;
  color: yellow;
  border-style: double;
  border-width: 5px;
  border-color: yellow;
  margin-bottom: 5px;

`;