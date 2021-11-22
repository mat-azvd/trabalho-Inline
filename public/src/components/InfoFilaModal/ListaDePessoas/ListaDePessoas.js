import React from "react"
import {
    ListaPessoasStyle,
    BtnDeletePessoa,
    BtnAtenderPessoa,
    Div1,
    Div2
} from "./ListaDePessoasElements"

import queueService from "../../../services/queue.js"

const ListaDePessoas = ({ pessoas, refresh }) => {
    async function onClickDelete(usuario) {
        await queueService.exit(usuario)

        refresh()
    }

    

    if (!pessoas) {
        return <div>carregando</div>
    } else {
        if (!pessoas.length) {
            return <div>Sem Usuarios</div>
        }
    }

    async function onClickAtender(queueId, userId) {
        await queueService.toMeet(queueId, userId)
        refresh()
    }

    return (
        <Div1 className="Lista-de-pessoas">
            {pessoas.map((pessoa) => (
                <Div2 key={pessoa._id}>
                    <ListaPessoasStyle>
                        {pessoa.posicao}{"º "}
                        {pessoa.usuarioId.nome}
                        <p>
                            {pessoa.atendido ? "Atendido" : "Aguardando"}
                        </p>

                        {pessoa.atendido ? null : (
                            <div>
                                <BtnAtenderPessoa onClick={() => onClickAtender(pessoa.filaId, pessoa.usuarioId._id)}>Atender</BtnAtenderPessoa>
                                <BtnDeletePessoa onClick={() => onClickDelete(pessoa.filaId)}>X</BtnDeletePessoa>
                            </div>
                        )}
                    </ListaPessoasStyle >
                </Div2>
            ))}
        </Div1>
    )
}

export default ListaDePessoas
