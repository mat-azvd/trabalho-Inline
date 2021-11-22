import styled from "styled-components/";

export const Div1 = styled.div`
overflow: hidden;
overflow-y: auto;
max-height: 200px;
`;

export const Div2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const ListaPessoasStyle = styled.div`
background-color: #233f78;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
margin-bottom: 5px;
color: #fff;
border-radius: 8px;
position: relative;
padding: 10px;
text-align: left;

box-shadow: 0 5px 7px 0 rgba(0,0,0, 0.75);

width: 90%;
height: 40px;
`;

export const BtnDeletePessoa = styled.button`
max-height: 20px;
width: 25px;

border-radius: 2px;
border-width: 0px;
color: #fff;
background-color: rgb(160, 0, 0);

&:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(215, 0, 0);
    color: #fff;
  }
`;
