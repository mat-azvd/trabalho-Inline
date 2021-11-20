import React /*,{ useState }*/ from "react";
import moment, {duration} from "moment";

const FilaEstatisticas = ({fila}) => {

    if(!fila) {
        return (
            <div>carregando</div>
        );
    }

    var timeNow = moment().format('DD/MM/yyyy HH:mm:ss');
    var timeFila = moment(fila.fim).format('DD/MM/yyyy HH:mm:ss');
    var timeFilaInicio = moment(fila.inicio).format('DD/MM/yyyy HH:mm:ss');
    let diff = moment(timeFila,"DD/MM/YYYY HH:mm:ss").diff(moment(timeNow,"DD/MM/YYYY HH:mm:ss"));
    var duracao = moment.duration(diff)
    var formato = Math.floor(duracao.asHours()) + moment.utc(diff).format(":mm:ss");
    
    console.log('agora ' + timeNow);
    console.log('Fim ' + timeFila);
    console.log('inicio ' + fila.inicio);
    console.log('tempo ' + formato);
    
    return(

        <ul className="Lista-de-pessoas">
            
                <li >
                    <h1>{fila.nome}</h1>
                    <p><strong>{formato.match(/-/) ? "Fila Encerrada.": "Tempo: " + formato }</strong></p>
                    <p><strong>Inicio: {timeFilaInicio}</strong></p>
                    <p><strong>Fim: {timeFila}</strong></p>
                </li>
           
        </ul>
        
        
    );
};

export default FilaEstatisticas;