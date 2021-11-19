import React from "react";

const ListaDePessoas = ({pessoas}) => {

    if(!pessoas) {
        return <div>carregando</div>
    }

    return (

        <ul className="Lista-de-pessoas">
            {pessoas.map((pessoa) => (
                <li >
                    <p>{pessoa.nome}</p>
                </li>
            )
            
            )}
        </ul>

    );

};

export default ListaDePessoas;