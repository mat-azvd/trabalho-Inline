import React from "react";
import { EditarInput,DivEditar } from "./EditarElements";
import {BotaoModal2} from "../ModalElements"

const FormEditarFila = ({fila}) => {

    if(!fila) {
        return <div>carregando</div>
    }

    console.log(fila);

    return(
        <div>
            {fila.map((fila) => (
            <DivEditar className="editar" key={fila.id}>
                <h1>Novo Nome</h1>
                <EditarInput placeholder={fila.titulo} />
                <h1>Novo Tempo</h1>
                <EditarInput placeholder={fila.tempo} />
                <BotaoModal2 >
                    Excluir Fila
                </BotaoModal2>
            </DivEditar>                                           
            )          
            
            )}
        
        
        </div>
    );
};

export default FormEditarFila;