import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const SectionContainer = styled.div`
  background:  #4682b4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
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
  background-size: 300px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const SectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  
  align-items: center;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  align-items: center;
  margin-right: 8px;
  -webkit-text-stroke-width: 0.2px; /* largura da borda */
  -webkit-text-stroke-color: #1976d2; /* cor da borda */

  @media (min-width: 768px) {
    font-size: 20px;

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }
`;

export const Icon = styled.div`
  color: #fff;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  flex-direction: columns;
`;

export const SectionQrCodeImg = styled.div`
  margin-top: 24px;
  align-items: center;
  max-width: 600px;
  
`;


export const ImgCode = styled.img`
  background-size: 300px;
  width: 100%;
  height: 100%;
  
  
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
