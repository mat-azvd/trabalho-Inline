import React, {useEffect, useState} from "react";
import queueService from "../../services/queue"
import styled from 'styled-components'
import moment from "moment";

const TitlePrincipal = styled.div`
    color: #fff;
    font-size: 18px;
    padding: 6px;

    @media only screen and (max-width: 640px) {
        font-size: 14px;
    }
`;

const TitleSecondary = styled.div`
    color: #fff;
    font-size: 20px;
    padding: 6px;

    @media only screen and (max-width: 640px) {
        font-size: 14px;
    }
`;

const DivElementosFila = styled.div`
width: 100%;
`;

const Fila = ({fila, onClickFila}) => {
    const [usuariosFila, setUsuariosFila] = useState(null);
    const id = fila._id;

    async function getUsuarios() {
        const queue = await queueService.get(id)
        setUsuariosFila(queue);
    }

    useEffect(() => {
        getUsuarios()
    }, [usuariosFila]);

    if(!fila || usuariosFila == null) {
        return <TitleSecondary>carregando</TitleSecondary>
    }

    return(
        <DivElementosFila onClick={onClickFila}>
        <TitlePrincipal> <strong>Nome: </strong>{fila.nome}</TitlePrincipal>
        <TitlePrincipal> <strong>Código: </strong>{fila.codigo}</TitlePrincipal>
        <TitleSecondary>{fila.ativo ? 'Fila ativa' : 'Fila desativada'}</TitleSecondary>
        <TitleSecondary>
            {usuariosFila.usuarios.length}
            {usuariosFila.usuarios.length === 1 ? ' pessoa' : ' pessoas' }
        </TitleSecondary>
        </DivElementosFila>
    );
};
export default Fila;
