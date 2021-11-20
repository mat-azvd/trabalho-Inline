import styled from "styled-components"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"


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
`

export const WhiteBG = styled.div`
  z-index: 3;
  background-color: #fff;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 420px;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 800px) {
    padding: 30px 30px;
    width: 100%;
  }

  p{
    color: #233f78;
    display: inline-block;
  }
  a{
    color: #233f78;
    text-align: center;
    font-weight: bold;
    padding 8x;
    float: right;

    &:hover{
      transition: all 0.2s ease-in-out;
      background: #1976d2;
      color: #fff;
      border-radius: 15px;
    }
  }
 `

export const SectionContent = styled.div`
  width: 30%;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  h1 {
    color: #233f78;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const LabelTitle = styled.div`
  color: #233f78;
  text-align: start;
  margin: 24px 0px -10px 5px;
`

export const InputSetup = styled.input`
  margin: 24px 0px 20px 5px;
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
    width: 60%;
    font-size: 16px;
  }
`



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
`

export const SectionTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`



export const SectionWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
