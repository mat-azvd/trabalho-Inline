import React from 'react';
import './../../App.css';

const Botao = (props) => ( 
    < button id="botao" onClick={props.onClick} > {props.label} </button>
)
export default Botao