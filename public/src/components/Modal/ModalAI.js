import React, {Children, useEffect, useState} from "react";
import Fila from "../principal/Fila";
import axios from "axios";
import Principal from "../principal/Principal";
import ReactDOM from "react-dom";
import { DivModal, Div2Modal,BotaoModal } from "./ModalElements";

const portalRoot = document.getElementById('portal-root');

const ModalAI = ({children, isOpen, isClose}) => {
/*
    const [fila, getFila] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/fila?_embed=pessoas")
        .then((response) => {
            getFila(response.data);
            console.log(response.data);
        });  

    }, []);
*/
if (!isOpen){
    return null;
}

return ReactDOM.createPortal (
    <DivModal className="overlay">
        <Div2Modal className="Modal">
            <div>{children}</div>
            <BotaoModal onClick={isClose}>
                Fechar
            </BotaoModal>
            <BotaoModal >
                Editar Fila
            </BotaoModal>
        </Div2Modal>
    </DivModal>
    ,portalRoot,
);

};

export default ModalAI;