import React /*,{ useState }*/ from "react";


const FilaEstatisticas = ({fila}) => {

    console.log(fila)
    if(!fila) {
        return (
            console.log("entrou")
        );
    }

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