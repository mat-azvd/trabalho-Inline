import styled from "styled-components";

export const DivEditar = styled.div`


`

export const EditarInput = styled.input`


  display: flex;
  width:90%;
  font-size: 14px;
  padding: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  border: 0;
  border-bottom: 1px solid #000;

  ::placeholder {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    width: 60%;
    font-size: 16px;
  }
  margin-top: 10px;
  margin-left: 20px;
`;

