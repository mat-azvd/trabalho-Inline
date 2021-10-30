import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const SectionInfo = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ ligthBg }) => (ligthBg ? "#fff" : "#101522")};
`;

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
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const SectionRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const SectionColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

/* toDo: adicionar  :before styles */

export const SectionBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.2;
`;

export const ImgCode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const SectionContent = styled.div`
  /* background: #fff; */
  width: 100%;
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
`;

export const SectionTitle = styled.h1`
  color: #fff;
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

export const Icon = styled.div`
  color: #fff;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  flex-direction: row;
`;

export const SectionQrCode = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input {
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    width: 100%;
    font-size: 1rem;
    outline: none;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 10px;
    border: none;
    min-width: 300px;
  }
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
