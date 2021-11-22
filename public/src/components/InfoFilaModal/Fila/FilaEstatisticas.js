import React /*,{ useState }*/ from "react";
import moment from "moment";

const FilaEstatisticas = ({fila}) => {
    if(!fila) {
        return (
            <div>carregando</div>
        );
    }

    let timeFila = moment(fila.fim).format('DD/MM/yyyy HH:mm:ss');
    let timeFilaInicio = moment(fila.inicio).format('DD/MM/yyyy HH:mm:ss');

    return(
        <ul className="Lista-de-pessoas"
        style= {{
            textAlign: "left",
            listStyle: "none",
            padding: "20px 40px",
        }}>
            <li >
                <h1>{fila.nome}</h1>
                <p><strong>Código</strong>: {fila.codigo}</p>
                <p><strong>Inicio:</strong> {timeFilaInicio}</p>
                <p><strong>Fim:</strong> {timeFila}</p>
            </li>
        </ul>
    );
};

export default FilaEstatisticas;
