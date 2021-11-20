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


    if(!fila || usuariosFila == null){
        return <div>carregando</div> 
       
    } 

     
    return(
        <div onClick={onClickFila}>
        <TitlePrincipal> <strong>Nome: </strong>{fila.nome}</TitlePrincipal>
        <TitleSecondary><strong>Início: </strong>{moment(fila.inicio).format('DD/MM/yyyy HH:mm:ss')}</TitleSecondary>
        <TitleSecondary>{usuariosFila.usuarios.length === 1 ? ' Pessoa:' : ' Pessoas:' }
            {usuariosFila.usuarios.length}</TitleSecondary>
        </div>

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