import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 0px;
  margin-right: auto;
  margin-left: auto;
 
  text-align: ${({ textAlign }) => textAlign || "center"};

  h1{
      margin-bottom: 2rem;
  }

  div{
      margin-bottom: 2rem;
      text-align: center;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding: 0 15px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const ModalContainer = styled.div`
  z-index: 101;
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  position: fixed;
  height: 100% !important;
  top: 0px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visibility" : "hidden")};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const ModalBody = styled.div`
  z-index: 101;
  display: flex;
  min-width: 240px;
  overflow: auto;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  position: relative;
  padding: 0 !important;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  background-color: #f9f9f9;
  max-width: ${({ maxWidth }) => maxWidth};

  h1 {
    color: #1b1d41;
  }
`;

const Dialog = styled.div`
  padding: 40px 60px;
`;



export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  border-radius: 10px;
  background: #18295b;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1976d2;
    color: #fff;
  }
`;

const Modal = ({
    show,
    onHide,
    headerText,
    text,
    btnText,
    maxWidth = "550px",
}) => (
    <ModalContainer show={show}>
        <ModalOverlay onClick={onHide}></ModalOverlay>
        <ModalBody maxWidth={maxWidth}>
            <Dialog>
                <Container textAlign="left">
                    <h1>{headerText}</h1>
                    <div>{text}</div>
                    <BtnWrap>
                        <Button className="mt-5" onClick={onHide}>
                            {btnText}
                        </Button>
                    </BtnWrap>
                </Container>
            </Dialog>
        </ModalBody>
    </ModalContainer>
);

export default Modal;