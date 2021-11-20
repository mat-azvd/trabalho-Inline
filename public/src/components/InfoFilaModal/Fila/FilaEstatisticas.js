import React /*,{ useState }*/ from "react";


const FilaEstatisticas = ({fila}) => {

    if(!fila) {
        return <div>carregando</div>
    }
console.log(fila);
    return(

        <ul className="Lista-de-pessoas">
            {fila.map((fila) => (
                <li >
                    <h1>{fila.titulo}</h1>
                    <p>Tempo:{fila.tempo}</p>
                </li>
            )
            
            )}
        </ul>
        
        
    );
};

export default FilaEstatisticas;