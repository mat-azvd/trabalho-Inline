import React, {useEffect, useState} from "react";
import queueService from "../../services/queue"


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
    <table>
        <tr></tr>
    <buttom onClick={onClickFila}>    
        <h1>Nome: {fila.nome}</h1>
        <h1>Inicio: {fila.inicio}</h1>
        <h2>{usuariosFila.usuarios.length === 1 ? ' Pessoa:' : ' Pessoas:' }
            {usuariosFila.usuarios.length}</h2>
       
    </buttom>
    </table>

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