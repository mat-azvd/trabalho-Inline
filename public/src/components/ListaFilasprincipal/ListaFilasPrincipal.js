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

const ListaFilasPrincipal = ({ isOpen, toggle }) => {
    const [filaId, setfilaID] = useState(null)
    const [fila, setFila] = useState([])

    async function getList() {
        const queue = await queueService.list()
        setFila(queue)
    }

    useEffect(() => {
        getList()
    }, [])


    return (
        <MainSection isOpen={isOpen} onClick={toggle}>

            <BtnDiv>
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