import styled from "styled-components";

export const FormContainer = styled.div`
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

  padding: 0 10px;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const FormContent = styled.div`
  background-color: #fff;
  width: 50%;
  min-width: 300px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 2rem;
  -webkit-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);

  label {
    font-weight: 500;
    color: #233f78;
  }
`;

export const FormTitle = styled.div`
  color: #233f78;
  text-align: center;
  margin: 15px 0px 50px 0px;
`;

export const FormInput = styled.input`
  margin: 6px 0px 30px 0px;
  display: flex;
  width: 100%;
  font-size: 14px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #000;

  ::placeholder {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    width: 100%;
    font-size: 16px;
  }
`;

export const DateContainer = styled.div`
  display: flex;

  .datepicker {
    width: 300px;
  }
`;

export const ContainerDate = styled.div`
  width: 100%;
`;
export const ContainerEndDate = styled.div`
  width: 300px;
  display: flex;
  font-size: 14px;
  padding: 20px;
  justify-content: end;
  border: none;
  outline: none;
`;

export const FormBtn = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
`;
export const FormBtnLink = styled.button`
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
