import React, {  } from "react";
import ReactDOM from "react-dom";
import { DivModal, Div2Modal,BotaoModal1, BotaoModal2,DivChild } from "./ModalElements";


const portalRoot = document.getElementById('portal-root');

const ModalAI = ({children, isOpen, isClose}) => {

    if (!isOpen){
        return null;
    }

    console.log(children);

    return ReactDOM.createPortal (
        <DivModal className="overlay">
            <Div2Modal className="Modal">
                <DivChild className="Children" isClose={isClose}>{children}</DivChild>
            </Div2Modal>
        </DivModal>
        ,portalRoot,
    );

};

export default ModalAI;
/*
<BotaoModal2 onClick={() => setEditarFila(children.fila)}>
                    Editar Fila
                </BotaoModal2>

*/