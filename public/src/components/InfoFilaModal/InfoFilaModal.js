import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import useApi from "../utils/useApi";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2} from "./ModalElements"
import EditarFilaModal from "./EditarFilaModal";


const InfoFilaModal = ({filaId, isClose}) => {

    const [editarFila, setEditarFila] = useState(null);

    const id = filaId;

    const [loadFila, loadInfoFila] = useApi({
        url: "http://localhost:5000/fila",
        params: {
            id,
        }

    });

    useEffect(() => {
        loadFila();
    }, []);

    const [loadPessoa, loadInfoPessoa] = useApi({
        url: "http://localhost:5000/pessoas",
        params: {
            filaId,
        }

    });

    useEffect(() => {
        loadPessoa();
    }, []);

    console.log(loadInfoPessoa);

    console.log(loadInfoFila);

    return (
        <ModalAI  isOpen isClose={isClose}>
                <FilaEstatisticas fila={loadInfoFila.data} />
            <ListaPessoasModal>
                <ListaDePessoas pessoas={loadInfoPessoa.data} />
            </ListaPessoasModal> 
            <BotaoModal2 onClick={() => setEditarFila(loadInfoFila.data)}>
                    Editar Fila
            </BotaoModal2>

            {editarFila && (
            <EditarFilaModal filaId={editarFila} isClose={() => setEditarFila(null)}/>
            ) }          
        </ModalAI> 
    )


}

export default InfoFilaModal;