import React from "react";
import {ListaPessoasStyle,
        BtnDeletePessoa,
        Div1,
        Div2} from "./ListaDePessoasElements"

const ListaDePessoas = ({pessoas}) => {

    if(!pessoas) {
        return <div>carregando</div>
    }

    return (

        <Div1 className="Lista-de-pessoas">
            {pessoas.map((pessoa) => (
                <Div2>    
                    <ListaPessoasStyle >
                        {pessoa.usuarioId.nome}
                    <BtnDeletePessoa>X</BtnDeletePessoa>
                    </ListaPessoasStyle >               
                    
                </Div2>
            )
            
            )}
        </Div1>

    );

};

export default ListaDePessoas;