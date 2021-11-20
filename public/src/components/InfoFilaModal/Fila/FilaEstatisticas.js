import React /*,{ useState }*/ from "react";


const FilaEstatisticas = ({fila}) => {

    if(!fila) {
        return <div>carregando</div>
    }
console.log(fila);
    return(

        <ul className="Lista-de-pessoas">
            
                <li >
                    <h1>{fila.nome}</h1>
                    <p dateFormat="dd/MM/yyyy h:mm aa">Tempo:{fila.inicio}</p>
                </li>
           
        </ul>
        
        
    );
};

export default FilaEstatisticas;