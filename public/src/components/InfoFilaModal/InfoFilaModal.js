import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2} from "./ModalElements"
import queueService from "../../services/queue"

const InfoFilaModal = ({filaId, isClose}) => {

    const [editarFila, setEditarFila] = useState({});

    //const [deleteFila, setDeleteFila] = useState();

    const id = filaId;

    async function clickDelete(){
        await queueService.deleteQueue(id);   

    }

    async function getList() {
        const queue = await queueService.get(id)    
        setEditarFila(queue);
        
    }

    useEffect(() => {
        getList()
    }, []);


    return (
        <ModalAI  isOpen isClose={isClose}>
            <FilaEstatisticas fila={editarFila} />

            <ListaPessoasModal>
                <ListaDePessoas pessoas={editarFila.usuarios} />
            </ListaPessoasModal>
            <BotaoModal2 onClick={() => clickDelete()}>
                    Excluir Fila
            </BotaoModal2>                 
        </ModalAI> 
    )


}

export default InfoFilaModal;

/*{modalOpen && (
            <EditarFilaModal filaId={editarFila._id} isClose={() => setModalOpen(false)}/>
            ) }

            <BotaoModal2 onClick={() => setModalOpen(true)}>
                    Excluir Fila
                </BotaoModal2>
            
*/