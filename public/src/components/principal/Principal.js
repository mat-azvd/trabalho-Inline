import React ,{ useEffect, useState } from "react";
import Botao from "./Botao";
import Fila from "./Fila";
import {Link} from 'react-router-dom';
import axios from "axios";
import { MainSection,Div1,Filas,BotaoStyle } from "./PrincipalElements";
import ModalAI from "../Modal/ModalAI";
import FilaModal from "../Modal/FilaModal";


const Principal = () => {
    
    const [filaId, setfilaID] = useState(null);
    
    const [fila, setFila] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/fila?_embed=pessoas")
        .then((response) => {
            setFila(response.data);
            console.log(response.data);
        });

    }, []);

return(
    <MainSection>
        <Div1 className="container filas">               
            {fila.map((fila) => (                       
                <Filas className="filas" key={fila.id} >
                    <Fila fila={fila} 
                    onClickFila={() => setfilaID(fila.id)} />                  
                </Filas>
            ))}

            {filaId && (
            <FilaModal filaId={filaId} isClose={() => setfilaID(null)}/>
            ) }
            
        </Div1>

        <BotaoStyle to="CriarFila">Criar fila</BotaoStyle>

    </MainSection>

);

};

export default Principal;

