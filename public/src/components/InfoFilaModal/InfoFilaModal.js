import React, {useEffect, useState} from "react";
import ModalAI from "./ModalAI";
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas";
import {ListaPessoasModal,BotaoModal2, BotaoModal3,BotaoModal1} from "./ModalElements"
import queueService from "../../services/queue"
import BotaoPausarRetomar from "./BotaoPausarRetomar"
import queue from "../../services/queue";

const InfoFilaModal = ({filaId, isClose}) => {

    const [editarFila, setEditarFila] = useState({});

    const [botaoLabel, setBotaoLabel] = useState({});

    const [corBotao, setCorBotao] = useState({});

    const id = filaId;

    useEffect(() => {
        getList()
    }, []);

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
    console.log(botaoLabel);
    console.log(editarFila.ativo);
    console.log(editarFila);
    
    if(botaoLabel===true){
        var label = 'Pausar';
        console.log(label)
    }   else{
            label = 'Retomar';
        console.log(label)
    }

    const estado = editarFila.ativo;

    async function clickChange(){
        if(botaoLabel===true){
            const data = await queueService.pause(id);          
            setCorBotao('green')
            setBotaoLabel(false)
            console.log(data)
            console.log(editarFila) 
        } else{
        const data =  await queueService.resume(id);
        setCorBotao('rgb(160, 0, 0)')
        setBotaoLabel(true)     
        console.log(data)
        console.log(editarFila)  
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

/*{modalOpen && (
            <EditarFilaModal filaId={editarFila._id} isClose={() => setModalOpen(false)}/>
            ) }

            <BotaoModal2 onClick={() => setModalOpen(true)}>
                    Excluir Fila
                </BotaoModal2>

                {botaoLabel==='Fila Pausada' ? botaoLabel = 'teste': botaoLabel = 'teste2'}
            
*/