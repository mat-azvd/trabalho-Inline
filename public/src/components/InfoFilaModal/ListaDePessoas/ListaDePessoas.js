import React, {useState} from "react";
import {ListaPessoasStyle,
        BtnDeletePessoa,
        Div1,
        Div2} from "./ListaDePessoasElements";

import queueService from "../../../services/queue.js"

const ListaDePessoas = ({pessoas}) => {

    const [clickDelete, setClickDelete] = useState();

    async function onClickDelete(usuario){
        await queueService.exit(usuario);
        console.log(usuario)

    }

    console.log(pessoas)
    if(!pessoas) {
        return <div>carregando</div>
    } else{

        if(!pessoas.length) {
            return <div>Sem Usuarios</div>
        }
    }
    
    console.log(pessoas)

    return (

        <Div1 className="Lista-de-pessoas">
            {pessoas.map((pessoa) => (
                <Div2>    
                    <ListaPessoasStyle >
                        {pessoa.posicao}{" "}
                        {pessoa.usuarioId.nome}
                    <BtnDeletePessoa onClick={() => onClickDelete(pessoa.filaId)}>X</BtnDeletePessoa>
                    </ListaPessoasStyle >               
                    
                </Div2>
            )
            
            )}
        </Div1>

    );

};

export default ListaDePessoas;