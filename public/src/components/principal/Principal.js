import React ,{ useEffect, useState } from "react";
import Fila from "./Fila";
import axios from "axios";
import { 
    MainSection,
    Div1,
    Filas,
    FormBtnLink,
    FormBtn,
    BtnDiv } from "./PrincipalElements";
import FilaModal from "../Modal/FilaModal";


const Principal = ({ isOpen, toggle }) => {
    
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
        <MainSection isOpen={isOpen} onClick={toggle}>
            <BtnDiv>
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
        
            
                <FormBtn>
                    <FormBtnLink to="/create-queue">Criar fila</FormBtnLink>
                </FormBtn>
            </BtnDiv>
        </MainSection>

    );

};

export default Principal;

