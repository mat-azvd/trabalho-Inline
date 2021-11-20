import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2, BotaoModal3} from "./ModalElements"
import queueService from "../../services/queue"
import BotaoPausarRetomar from "./BotaoPausarRetomar"
import queue from "../../services/queue";

const InfoFilaModal = ({filaId, isClose}) => {

    const [editarFila, setEditarFila] = useState({});

    var [botaoLabel, setBotaoLabel] = useState({});

    const [corBotao, setCorBotao] = useState({});

    console.log(editarFila);
    console.log(editarFila.ativo);
    
    const id = filaId;


    async function clickChange(){
        if(botaoLabel==='Fila retomada'){
            const data = await queueService.pause(id);
            setBotaoLabel(data.mensagem)
            console.log(data.mensagem)
            console.log(botaoLabel) 
        } else{
        const data = await queueService.resume(id);
        setBotaoLabel(data.mensagem) 
        console.log(data.mensagem)
        console.log(botaoLabel)
        }
    }

    async function getList() {
        const queue = await queueService.get(id)    
        setEditarFila(queue);
        
    }

    useEffect(() => {
        getList()
    }, []);

    if(botaoLabel==='Fila retomada'){
        var label = 'Retomar';
        console.log(label)
    }   else{
            label = 'Pausar';
        console.log(label)
    }

    return (
        <ModalAI  isOpen isClose={isClose}>
            <FilaEstatisticas fila={editarFila} />
            <ListaPessoasModal>
                <ListaDePessoas pessoas={editarFila.usuarios} />
            </ListaPessoasModal>
            <BotaoModal3 onClick={() => clickChange()}>
                <BotaoPausarRetomar label={label} />
            </BotaoModal3>                 
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

                {botaoLabel==='Fila Pausada' ? botaoLabel = 'teste': botaoLabel = 'teste2'}
            
*/