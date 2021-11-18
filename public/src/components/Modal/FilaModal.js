import React, {useEffect} from "react";
import ModalAI from "./ModalAI";
import useApi from "../utils/useApi";
import FilaEstatisticas from "../Fila/FilaEstatisticas";
import ListaDePessoas from "../ListaDePessoas/ListaDePessoas";


const FilaModal = ({filaId, isClose}) => {

    const id = filaId;

    const [loadFila, loadInfoFila] = useApi({
        url: "http://localhost:5000/fila",
        params: {
            id,
        }

    });

    useEffect(() => {
        loadFila();
    }, []);

    const [loadPessoa, loadInfoPessoa] = useApi({
        url: "http://localhost:5000/pessoas",
        params: {
            filaId,
        }

    });

    useEffect(() => {
        loadPessoa();
    }, []);

    console.log(loadInfoPessoa);

    console.log(loadInfoFila);

    return (
        <ModalAI  isOpen isClose={isClose}>
            <FilaEstatisticas fila={loadInfoFila.data} />
            <ListaDePessoas pessoas={loadInfoPessoa.data} />             
        </ModalAI> 
    )


}

export default FilaModal;