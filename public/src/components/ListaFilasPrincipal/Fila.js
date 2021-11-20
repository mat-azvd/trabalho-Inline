import React from "react";
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

const Fila = ({ fila, onClickFila }) => (
    <div onClick={onClickFila}>
        <TitlePrincipal> <strong>Nome: </strong>{fila.nome}</TitlePrincipal>
        <TitleSecondary><strong>Início: </strong>{moment(fila.inicio).format('DD/MM/yyyy HH:mm:ss')}</TitleSecondary>
    </div>
);

export default Fila;
/*
<h2> {fila.pessoas.length}
        {fila.pessoas.length === 1 ? ' Pessoa' : ' Pessoas' }  </h2>
        <h3>Tempo: {fila.tempo}</h3>
    */