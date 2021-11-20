import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import useApi from "../utils/useApi";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2} from "./ModalElements"
import EditarFilaModal from "./EditarFilaModal";
import queueService from "../../services/queue"

const InfoFilaModal = ({filaId, isClose}) => {

    const [editarFila, setEditarFila] = useState({});

    const [modalOpen, setModalOpen] = useState(false)

    const id = filaId;

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