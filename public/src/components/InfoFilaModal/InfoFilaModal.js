import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2, BotaoModal3,BotaoModal1} from "./ModalElements"
import queueService from "../../services/queue"
import BotaoPausarRetomar from "./BotaoPausarRetomar"

const InfoFilaModal = ({filaId, isClose}) => {
    const [editarFila, setEditarFila] = useState({});
    const [botaoLabel, setBotaoLabel] = useState({});
    const [corBotao, setCorBotao] = useState({});

    const id = filaId;

    let label;

    useEffect(() => {
        getList()
    }, [editarFila]);

    async function getList() {
        const queue = await queueService.get(id)    
        setEditarFila(queue);
        setBotaoLabel(queue.ativo)
        if(queue.ativo===true){          
            setCorBotao('rgb(160, 0, 0)')
        } else {
            setCorBotao('green')
        }
    }

    if (botaoLabel === true) {
        label = 'Pausar';
    }   else{
        label = 'Retomar';
    }

    async function clickChange(){
        if(botaoLabel===true){
            await queueService.pause(id);
            setCorBotao('green')
            setBotaoLabel(false)
        } else {
            await queueService.resume(id);
            setCorBotao('rgb(160, 0, 0)')
            setBotaoLabel(true)
        }
    }

    return (
        <ModalAI  isOpen isClose={isClose}>
            <FilaEstatisticas fila={editarFila} />
            <ListaPessoasModal>
                <ListaDePessoas pessoas={editarFila.usuarios} />
            </ListaPessoasModal>
            <BotaoModal1>
            <BotaoModal3 color={corBotao} onClick={() => clickChange()}>
                <BotaoPausarRetomar label={label} />
            </BotaoModal3>     
                <BotaoModal2 onClick={isClose}>
                    Fechar
                </BotaoModal2>
            </BotaoModal1>                 
        </ModalAI> 
    )
}

export default InfoFilaModal;