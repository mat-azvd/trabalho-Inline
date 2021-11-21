import React, {useEffect, useState} from "react";
import queueService from "../../services/queue"
import styled from 'styled-components'
import moment from "moment";

const TitlePrincipal = styled.div`
    color: #fff;
    font-size: 20px;
    padding: 6px;


    @media only screen and (max-width: 640px) {
        font-size: 14px;
    }

`;

const TitleSecondary = styled.div`
    color: #fff;
    font-size: 20px;
    padding: 6px;

    @media only screen and (max-width: 640px) {
        font-size: 14px;
    }

`;

const DivElementosFila = styled.div`
width: 100%;
`;

const Fila = ({fila, onClickFila}) => {

    const [usuariosFila, setUsuariosFila] = useState(null);


    const id = fila._id;

    async function getUsuarios() {
        const queue = await queueService.get(id)    
        setUsuariosFila(queue);
        
    }

    useEffect(() => {
        getUsuarios()
    }, []);

    var timeNow = moment().format('DD/MM/yyyy HH:mm:ss');
    var timeFila = moment(fila.fim).format('DD/MM/yyyy HH:mm:ss');

    let diff = moment(timeFila,"DD/MM/YYYY HH:mm:ss").diff(moment(timeNow,"DD/MM/YYYY HH:mm:ss"));
    var duracao = moment.duration(diff)
    var formato = Math.floor(duracao.asHours()) + moment.utc(diff).format(":mm:ss");


    if(!fila || usuariosFila == null){
        return <TitleSecondary>carregando</TitleSecondary> 
       
    } 

     
    return(
        <DivElementosFila onClick={onClickFila}>
        <TitlePrincipal> <strong>Nome: </strong>{fila.nome}</TitlePrincipal>
        <TitleSecondary><strong>Tempo: </strong>{formato.match(/-/) ? "Fila Encerrada.": formato }</TitleSecondary>
        <TitleSecondary>{usuariosFila.usuarios.length === 1 ? ' Pessoa:' : ' Pessoas:' }
            {usuariosFila.usuarios.length}</TitleSecondary>
        </DivElementosFila>

    );
};
export default Fila;
/*
<h2> {fila.pessoas.length}
        {fila.pessoas.length === 1 ? ' Pessoa' : ' Pessoas' }  </h2>
        <h3>Tempo: {fila.tempo}</h3>

        <h2>{usuariosFila.usuarios.length === 1 ? ' Pessoa:' : ' Pessoas:' }
            {usuariosFila.usuarios.length}</h2>
<h2>{usuariosFila.usuarios.length === 1 ? ' Pessoa:' : ' Pessoas:' }
            {usuariosFila.usuarios.length}</h2>
             
    */