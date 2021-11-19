import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";


export const SectionContainer = styled.div`
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
  height: calc(100vh - 70px);
  position: relative;
  z-index: 1;
`;

export const WhiteBG = styled.div`
  z-index: 3;
  background-color: #fff;
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  border-radius: 30px;
  justify-content: center;
  -webkit-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 800px) {
    padding:20px 5px;

  }
 `;

export const SectionContent = styled.div`
  /* background: #fff; */
  width: 30%;
  border-radius: 30px;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* -webkit-box-shadow: 5px 7px 8px 3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 7px 8px 3px rgba(0, 0, 0, 0.51); */

  @media screen and (max-width: 800px) {
    width: 80%;

  }

  h1 {
    color: #233f78;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }


`;

export const LabelTitle = styled.div`
  color: #233f78;
  text-align: start;
  margin: 24px 0px -10px 5px;
`;

export const InputSetup = styled.input`
  margin: 24px 0px 30px 5px;
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



export const SectionTitle = styled.h1`
  color: #fff !important;
  padding:50px;
  font-size: 18px;
  text-align: center;
  margin-right: 8px;
  -webkit-text-stroke-width: 0.4px; /* largura da borda */
  -webkit-text-stroke-color: #233f78; /* cor da borda */
  @media (min-width: 768px) {
    font-size: 20px;

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }
`;

export const SectionTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;



export const SectionWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
