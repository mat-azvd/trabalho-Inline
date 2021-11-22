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
import queueService from "../../services/queue";
import { useHistory } from "react-router-dom";
import moment from 'moment';

const CreateQueue = ({ isOpen, toggle }) => {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(moment().add(1, 'days').toDate());
    const history = useHistory();

    async function onSubmit() {
        try {
            await queueService.create({
                nome: name,
                inicio: startDate,
                fim: endDate,
            });

            history.push(`/queue-manager`);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <FormContainer isOpen={isOpen} onClick={toggle}>
                <FormContent>
                    <FormTitle>
                        <h1>Criar Fila</h1>
                    </FormTitle>
                    <label htmlFor="name">Nome da fila:</label>
                    <FormInput
                        type="text"
                        name="name"
                        placeholder="Digite o nome da fila"
                        onChange={(e) => setName(e.target.value)}
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
                        <FormBtnLink onClick={() => onSubmit()}>CRIAR</FormBtnLink>
                    </FormBtn>
                </FormContent>
            </FormContainer>
        </>
    );
};

export default CreateQueue;
