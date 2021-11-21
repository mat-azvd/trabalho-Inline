import React, { useEffect, useState } from "react"
import Fila from "./Fila"
import {
    MainSection,
    Div1,
    Filas,
    FormBtnLink,
    FormBtn,
    BtnDiv,
    Titulo
} from "./ListaFilasPrincipalElements"
import InfoFilaModal from "../InfoFilaModal/InfoFilaModal"
import queueService from "../../services/queue"
import storeService from "../../services/store"


const ListaFilasPrincipal = ({ isOpen, toggle }) => {
    const [filaId, setfilaID] = useState(null)
    
    const [fila, setFila] = useState([])

   /* 
   const [lojaId, setlojaID] = useState(null)
   useEffect(() => {
        getLoja()
    }, [])

    async function getLoja() {
        const loja = await storeService.getLoja()
        setlojaID(loja)
    }
    console.log(lojaId)
*/
    async function getList() {
        const queue = await queueService.list()
        setFila(queue)
    } 

    useEffect(() => {
        getList()
    }, [])

    console.log(fila)
    return (
        <MainSection isOpen={isOpen} onClick={toggle}>

            <BtnDiv className="BntDiv">
                <Titulo>Minhas Filas</Titulo>
                <Div1 className="container filas">
                    {fila.map((fila) => (
                        <Filas className="filas" key={fila._id} >
                            <Fila fila={fila}
                                onClickFila={() => setfilaID(fila._id)} />
                        </Filas>
                    ))}

                    {filaId && (
                        <InfoFilaModal filaId={filaId} isClose={() => setfilaID(null)} />
                    )}
                </Div1>
                <FormBtn>
                    <FormBtnLink to="/create-queue">Criar fila</FormBtnLink>
                </FormBtn>
            </BtnDiv>
        </MainSection>
    )
}

export default ListaFilasPrincipal

/*





useEffect(() => {
    const getData = async () => {
    const data = await queueService.list();
    setFila(data)
    };
    getData();
}, []);
*/