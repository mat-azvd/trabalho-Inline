import React, {useEffect} from "react";
import ModalAI from "./ModalAI";
import useApi from "../utils/useApi";
import FormEditarFila from "./Fila/FormEditarFila"


const EditarFilaModal = ({filaId, isClose}) => {

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

    console.log(loadInfoFila);

    return (
        <ModalAI  isOpen isClose={isClose}>
            <FormEditarFila fila={loadInfoFila.data} />
        </ModalAI>
    )


}

export default EditarFilaModal;