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
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const WrapperTime = styled.div`
  border-radius: 30px;
  padding: 20px;
  background-color:#233f78;
  margin-top: 20px;
  p{
    text-align: center;
    color: #fff;
  }
`;

export const TimeCounter = styled.div`
  font-size:30px;
  color:#fff;
  text-align: center;

`;

export const ExitQ = styled.div`
  border-radius: 30px;
  padding: 20px;
  background-color:#bc544b;
  margin-top: 20px;
  text-align: center;
  color: #fff;
  width:40%;
`;

export const GiveQ = styled.div`
  border-radius: 30px;
  padding: 20px;
  background-color:#ffe87c;
  margin-top: 20px;
  text-align: center;
  color: #fff;
  width:40%;
`;



export const WrapperPosition = styled.div`
  border-radius: 30px;
  border-color: #233f78;
  border-width: 2px;
  padding: 20px;
  border-style: solid;
  p{
    text-align: center;
    color: #233f78;
  }
`;

export const PositionQ = styled.div`
    font-size:60px;
    display:flex;
    justify-content: center;
    color: #233f78;
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
    padding-bottom: 20px;
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
