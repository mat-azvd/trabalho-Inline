import React from "react";


const Fila = ({fila, onClickFila}) => (

    <buttom onClick={onClickFila}> 
        <h1> Nome: {fila.titulo}</h1>
        <h2> {fila.pessoas.length}
        {fila.pessoas.length === 1 ? ' Pessoa' : ' Pessoas' }  </h2>
        <h3>Tempo: {fila.tempo}</h3>
    </buttom>
);

export default Fila;