import React ,{ useEffect, useState } from "react";
import Botao from "./Botao";
import Fila from "./Fila";

import axios from "axios";

import { MainSection,Div1,Filas } from "./PrincipalElements";


const Principal = () => {
    

    const [fila, setFila] = useState([]);

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
                        <Filas>
                            <Fila fila={fila}/>
                        </Filas>
                    ))}

                <Botao/>
                
        </Div1>



    </MainSection>

);

};

export default Principal;