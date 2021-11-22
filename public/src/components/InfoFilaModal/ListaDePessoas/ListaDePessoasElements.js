import styled from "styled-components/";

export const Div1 = styled.div`
overflow: hidden;
overflow-y: auto;
max-height: 200px;
`;

export const Div2 = styled.div`
display: flex;
justify-content: center;
`;

export const ListaPessoasStyle = styled.div`

background-color: #233f78;
margin-top: 10px;
margin-bottom: 5px;
color: #fff;
border-radius: 8px;
position: relative;

box-shadow: 0 5px 7px 0 rgba(0,0,0, 0.75);

width: 90%;
max-height: 20px;
`;

export const BtnDeletePessoa = styled.button`
float: right;
max-height: 20px;
width: 25px;

border-radius: 0px 8px 8px 0px;
border-width: 0px;
background-color: rgb(160, 0, 0);

&:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(215, 0, 0);
    color: #fff;
  }
`;
