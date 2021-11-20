import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2} from "./ModalElements"
import EditarFilaModal from "./EditarFilaModal";
import queueService from "../../services/queue"

const InfoFilaModal = ({filaId, isClose}) => {

    const [editarFila, setEditarFila] = useState({});

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        getList()
    }, []);


    async function getList() {
        const queue = await queueService.get(filaId)
        setEditarFila(queue);
    }

    return (
        <ModalAI  isOpen isClose={isClose}>
            <FilaEstatisticas fila={editarFila} />

            <ListaPessoasModal>
                <ListaDePessoas pessoas={editarFila.usuarios} />
            </ListaPessoasModal>
            <BotaoModal2 onClick={() => setModalOpen(true)}>
                    Editar Fila
            </BotaoModal2>

            {modalOpen && (
            <EditarFilaModal filaId={editarFila._id} isClose={() => setModalOpen(false)}/>
            ) }
        </ModalAI>
    )


}

export default InfoFilaModal;