import React /*,{ useState }*/ from "react";


const Fila = ({fila, onClickFila}) => (

    <buttom onClick={onClickFila}> 
        <h1> Nome: {fila.titulo}</h1>
        <h2> {fila.pessoas.length}
        {fila.pessoas.length === 1 ? ' Pessoa' : ' Pessoas' }  </h2>
    </buttom>
);
/*
class Fila extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            titulo: "Primeira",
            tempo: 0,           
            pessoas: []
        }
    }

    render() {

        const { titulo, tempo } = this.state

        return(

            <div>
            <h1>Nome:{ titulo }</h1>
            <h1>Tempo:{ tempo }</h1>
            </div>

        );

    }
    

}
*/

export default Fila;