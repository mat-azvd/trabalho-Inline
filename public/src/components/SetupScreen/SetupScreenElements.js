import styled from "styled-components";

// export const SetupContainer = styled.div`
//   background: rgb(2, 0, 36);
//   background: linear-gradient(
//     90deg,
//     rgba(2, 0, 36, 1) 0%,
//     rgba(35, 63, 120, 1) 57%,
//     rgba(0, 155, 255, 1) 100%
//   );
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   padding: 0 10px;
//   height: 100vh;
//   position: relative;
//   z-index: 1;
//   overflow: hidden;
// `;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #b1d4e0;
`;

export const ContainerContent = styled.div`
  background-color: #b1d4e0;
  width: 70%;
  padding: 70px;
  box-sizing: border-box;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  h1 {
    color: #233f78;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ContainerSection = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  border-radius: 2rem;
  justify-content: center;
  -webkit-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
`;

export const LabelTitle = styled.div`
  color: #233f78;
  text-align: start;
  margin: 24px 0px -10px 120px;
`;

export const InputSetup = styled.input`
  margin: 24px 0px 30px 120px;
  display: flex;
  width: 60%;
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
    width: 60%;
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
  margin-right: 70px;
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
