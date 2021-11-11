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
  height: 900px;
  position: relative;
  z-index: 1;
  
`;

export const Div1 = styled.div`

display: inline-block;
justify-content: center;
align-items: center;
color: black;
background-color: rgb(100, 100, 255);
width: 70%;
max-width: 1000px;
height: 80%;
border: rgb(0, 0, 0);
border-style: double;
border-width: 5px;
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

&:hover {
  transition: all 0.2s ease-in-out;
  border: 1px solid white;
}



`;

export const BotaoStyle = styled.button`

  border-radius: 20px;
  background: #fff;
  white-space: nowrap;
 
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;


  

  margin-top: 4%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1976d2;
    color: #fff;
  }
`;