import React, { useEffect, useState } from "react"
import ModalAI from "./ModalAI"
import FilaEstatisticas from "./Fila/FilaEstatisticas"
import ListaDePessoas from "./ListaDePessoas/ListaDePessoas"
import { ListaPessoasModal, BotaoModal2, BotaoModal3, BotaoModal1 } from "./ModalElements"
import queueService from "../../services/queue"
import BotaoPausarRetomar from "./BotaoPausarRetomar"

const InfoFilaModal = ({ filaId, isClose }) => {
    const [fila, setFila] = useState({})
    const [botaoLabel, setBotaoLabel] = useState({})
    const [corBotao, setCorBotao] = useState({})

    let label

    useEffect(() => {
        getQueue()
    }, [])

    async function getQueue() {
        const queue = await queueService.get(filaId)
        setFila(queue)
        setBotaoLabel(queue.ativo)

        if (queue.ativo) {
            setCorBotao('rgb(160, 0, 0)')
        } else {
            setCorBotao('green')
        }
    }

    if (botaoLabel) {
        label = 'Pausar'
    } else {
        label = 'Retomar'
    }

    async function clickChange() {
        if (botaoLabel) {
            await queueService.pause(filaId)
            setCorBotao('green')
            setBotaoLabel(false)
        } else {
            await queueService.resume(filaId)
            setCorBotao('rgb(160, 0, 0)')
            setBotaoLabel(true)
        }
    }

    return (
        <ModalAI isOpen isClose={isClose}>
            <FilaEstatisticas fila={fila} />
            <ListaPessoasModal>
                <ListaDePessoas pessoas={fila.usuarios} refresh={getQueue}/>
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

export default InfoFilaModal
