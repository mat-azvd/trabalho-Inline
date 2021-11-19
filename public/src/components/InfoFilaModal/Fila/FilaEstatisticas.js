import React /*,{ useState }*/ from "react";


const FilaEstatisticas = ({fila}) => {

    if(!fila) {
        return <div>carregando</div>
    }

    return(

        <ul className="Lista-de-pessoas">
            {fila.map((fila) => (
                <li >
                    <h1>{fila.titulo}</h1>
                </li>
            )
            
            )}
        </ul>
        
        
    );
};

export default FilaEstatisticas;