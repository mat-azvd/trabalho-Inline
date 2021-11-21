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

`;

export const DivChild = styled.div`

height: 90%;
`;

export const Div2Modal = styled.div`

display: block; 
text-align: center;
align-items: center;
background-color: white;
width: 50%;
min-width: 300px;
max-width: 1000px;
height: 50%;
border: rgb(0, 0, 0);

margin:150px auto 0 auto;

border-width: 5px;
border-radius: 8px;
padding-bottom: 10px;

overflow: hidden;
overflow-y: scroll;

`


export const BotaoModal1 = styled.div`
  
`;

export const BotaoModal2 = styled.button`

  border-radius: 10px;
  background: #233f78;
  white-space: nowrap;
  margin-top: 10px;
  padding: 10px 32px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 50%;
  max-width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1976d2;
    color: #fff;
  }

`
export const BotaoModal3 = styled.button`

  border-radius: 10px;

  background: ${props => `${props.color}`};
  white-space: nowrap;
  margin-top: 10px;
  padding: 10px 32px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 50%;
  max-width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.color==='rgb(160, 0, 0)' ? 'rgb(215, 0, 0)' : 'rgb(0, 200, 0)'};
    color: #fff;
  }

`

export const ListaPessoasModal = styled.div`

`

/*
flex-direction: column;
  display: flex; 
  vertical-align: bottom;
  align-items: center;
  border-radius: 10px;
  */