import React, { useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    SectionContainer,
    SectionContent,
    SectionWrapper,
    WhiteBG,
    LabelTitle,
    InputSetup,

} from "./BodySignElements";
import { Button } from "../ButtonElements";
import userService from "../../services/user";
import { useHistory, useParams } from "react-router-dom";
import formatCPF from "../../utils/helpers";



const BodySign = () => {
    const [hover, setHover] = useState(false);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    const { storeId } = useParams();

    const onHover = () => {
        setHover(!hover);
    };

    async function onSubmit() {
        if (password !== confirmPassword) {
            alert("Senhas não conferem");
        }

        try {
            await userService.create({
                nome: name,
                cpf: cpf,
                senha: password,
                lojaId: storeId,
            });

            history.push(`/login`);
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <SectionContainer>
            <SectionContent>
                <WhiteBG>
                    <h1>Cadastro de Usuário</h1>
                    <LabelTitle>Nome</LabelTitle>
                    <InputSetup type="nome" placeholder="Nome" onChange={(e) => setName(e.target.value)}></InputSetup>
                    <LabelTitle>CPF</LabelTitle>
                    <InputSetup placeholder="CPF" onChange={(e) => setCpf(formatCPF(e.target.value))} value={cpf} maxLength="14"></InputSetup>
                    <LabelTitle>Senha</LabelTitle>
                    <InputSetup type="password" onChange={(e) => setPassword(e.target.value)}></InputSetup>
                    <LabelTitle>Confirmar Senha</LabelTitle>
                    <InputSetup type="password" onChange={(e) => setConfirmPassword(e.target.value)}></InputSetup>
                </WhiteBG>
                <SectionWrapper>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover} onClick={() => onSubmit()}>
                        Cadastrar {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodySign;
