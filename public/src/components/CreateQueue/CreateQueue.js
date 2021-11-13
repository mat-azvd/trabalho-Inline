import React, { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
    FormBtn,
    FormBtnLink,
    FormContainer,
    FormContent,
    FormInput,
    FormTitle,
} from "./CreateQueueElements";

const CreateQueue = ({ isOpen, toggle }) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <>
            <FormContainer isOpen={isOpen} onClick={toggle}>
                <FormContent>
                    <FormTitle>
                        <h1>Criar Fila</h1>
                    </FormTitle>
                    <label htmlFor="name">Nome da Loja:</label>
                    <FormInput
                        type="text"
                        name="name"
                        placeholder="Digite o nome da Loja"
                    />
                    <label htmlFor="date">Data Início:</label>
                    <Datepicker
                        todayButton="Hoje"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        placeholderText="dd/mm/aaaa HH:mm"
                        showTimeInput
                        locale="pt-BR"
                        isClearable
                    />
                    <label htmlFor="date">Data Fim:</label>
                    <Datepicker
                        todayButton="Hoje"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        placeholderText="dd/mm/aaaa HH:mm"
                        locale="pt-BR"
                        showTimeInput
                        isClearable
                    />
                    <FormBtn>
                        <FormBtnLink to="/signup">CRIAR</FormBtnLink>
                    </FormBtn>
                </FormContent>
            </FormContainer>
        </>
    );
};

export default CreateQueue;
