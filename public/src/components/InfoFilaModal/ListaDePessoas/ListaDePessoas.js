import React from "react";
import {ListaPessoasStyle,BtnDeletePessoa,Div1} from "./ListaDePessoasElements"

const ListaDePessoas = ({pessoas}) => {

    if(!pessoas) {
        return <div>carregando</div>
    }

    return (

        <ul className="Lista-de-pessoas">
            {pessoas.map((pessoa) => (
                <Div1>    
                    <ListaPessoasStyle >
                        {pessoa.nome}
                    </ListaPessoasStyle >               
                    <BtnDeletePessoa>X</BtnDeletePessoa>
                </Div1>
            )
            
            )}
        </ul>

    );

};

export default ListaDePessoas;