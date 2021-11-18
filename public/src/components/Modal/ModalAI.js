import React from "react";
import ReactDOM from "react-dom";
import { DivModal, Div2Modal,BotaoModal1, BotaoModal2 } from "./ModalElements";

const portalRoot = document.getElementById('portal-root');

const ModalAI = ({children, isOpen, isClose}) => {

if (!isOpen){
    return null;
}

return ReactDOM.createPortal (
    <DivModal className="overlay">
        <Div2Modal className="Modal">
            <div>{children}</div>
        
            <BotaoModal1>
                <BotaoModal2 onClick={isClose}>
                    Fechar
                </BotaoModal2>
                <BotaoModal2 >
                    Editar Fila
                </BotaoModal2>
            </BotaoModal1>
        </Div2Modal>
    </DivModal>
    ,portalRoot,
);

};

export default ModalAI;