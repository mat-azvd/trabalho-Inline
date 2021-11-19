import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DivModal, Div2Modal,BotaoModal1, BotaoModal2 } from "./ModalElements";
import EditarFilaModal from "./EditarFilaModal";

const portalRoot = document.getElementById('portal-root');

const ModalAI = ({children, isOpen, isClose}) => {

    const [editarFila, setEditarFila] = useState(null);

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
                <BotaoModal2 onClickEditar={() => setEditarFila(children.fila.id)}>
                    Editar Fila
                </BotaoModal2>
            </BotaoModal1>
        </Div2Modal>

        {editarFila && (
            <EditarFilaModal filaId={editarFila} isClose={() => setEditarFila(null)}/>
            ) }

    </DivModal>
    ,portalRoot,
);

};

export default ModalAI;