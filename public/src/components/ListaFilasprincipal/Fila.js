import React from "react";


const Fila = ({fila, onClickFila}) => (

    <table>
        <tr></tr>
    <buttom onClick={onClickFila}>    
        <h1> Nome: {fila.nome}</h1>
        <h1>Inicio:</h1>
    </buttom>
    </table>
);

export default Fila;
/*
<h2> {fila.pessoas.length}
        {fila.pessoas.length === 1 ? ' Pessoa' : ' Pessoas' }  </h2>
        <h3>Tempo: {fila.tempo}</h3>
    */