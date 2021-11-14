import React ,{ useEffect, useState } from "react";
import Botao from "./Botao";
import Fila from "./Fila";
import {Link} from 'react-router-dom';
import axios from "axios";
import { MainSection,Div1,Filas,BotaoStyle } from "./PrincipalElements";
import Modal from "../Modal/Modal";


const Principal = () => {
    
    const [fila, setFila] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/fila?_embed=pessoas")
        .then((response) => {
            setFila(response.data);
            console.log(response.data);
        });

    }, []);
 
/*
    const fila = {

        "id": 1,
        "titulo": "teste",
        "pessoas": [
            {"nome":"matheus",
            "id":1,
            }
        ],
       
    };
*/
return(
    <MainSection>
        <Div1>               
            {fila.map((fila) => (                       
                <Filas key={fila.id} onClick={() => setIsModalVisible(true)} >
                    <Fila fila={fila}/>
                    
                </Filas>
            ))}
            {isModalVisible ? <Modal><h2>{fila.id}</h2></Modal> : null}              
        </Div1>

        <BotaoStyle to="CriarFila">Criar fila</BotaoStyle>

    </MainSection>

);

};

export default Principal;