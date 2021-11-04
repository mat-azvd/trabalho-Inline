import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

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

  padding: 0 10px;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

/* toDo: adicionar  :before styles */

export const SectionBg = styled.div`
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
  height: 100%;
  border-radius: 30px;
  z-index: 3;
  max-width: 1280px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  /* -webkit-box-shadow: 5px 7px 8px 3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 7px 8px 3px rgba(0, 0, 0, 0.51); */
`;

export const SectionLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const SectionIcon = styled(HiOutlineChevronDoubleRight)`
  margin-right: 0.1rem;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 16px;
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

export const SectionRowCreate = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  h4 {
    font-weight: 300;
    font-size: 14px;
  }

  a {
    color: #fff;
    font-weight: bold;
  }
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
