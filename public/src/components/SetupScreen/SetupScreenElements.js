import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  background: #b1d4e0;
`;

export const ContainerContent = styled.div`
  background-color: #b1d4e0;
  display: flex;
  width: 70%;
  padding: 0 70px;
  box-sizing: border-box;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }

  h1 {
    color: #233f78;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ContainerSection = styled.div`
  padding: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 800px) {
    padding: 80px 20px;
    height: 100%;
    border-radius: 0;
  }
`;

export const LabelTitle = styled.div`
  color: #233f78;
  text-align: start;
  margin: 24px 0px -10px 0px;
`;

export const InputSetup = styled.input`
  margin: 24px 0px 30px 0px;
  display: flex;
  width: 100%;
  font-size: 14px;
  padding: 2px;
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
    align-items: center;
    font-size: 16px;
  }
`;

export const BtnSetup = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
`;

export const Btn = styled.button`
  border-radius: 10px;
  background: #233f78;
  white-space: nowrap;
  margin-top: 20px;
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
