import React, { useEffect } from "react";
import {
    Btn,
    BtnSetup,
    Container,
    ContainerContent,
    ContainerSection,
    InputSetup,
    LabelTitle,
} from "./SetupScreenElements";
import SidebarSetup from "./SidebarSetup/SidebarSetup";
import userService from '../../services/user';
import formatCPF from "../../utils/helpers";

const SetupScreen = () => {
    const [name, setName] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [id, setId] = React.useState("");

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const user = await userService.getLoggedUser();

        setCpf(user.cpf)
        setName(user.nome)
        setId(user._id)
    }

    async function onSubmit() {
        try {
            await userService.update(id, {
                cpf,
                nome: name,
                senha: password,
            });

            alert("Usuário atualizado com sucesso!");
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <Container>
            <SidebarSetup />
            <ContainerContent>
                <ContainerSection>
                    <h1>Alterar informações</h1>
                    <LabelTitle>Nome</LabelTitle>
                    <InputSetup type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}></InputSetup>
                    <LabelTitle>CPF</LabelTitle>
                    <InputSetup type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(formatCPF(e.target.value))} maxLength="14"></InputSetup>
                    <LabelTitle>Senha</LabelTitle>
                    <InputSetup type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}></InputSetup>
                    <BtnSetup>
                        <Btn onClick={() => onSubmit()}>Alterar</Btn>
                    </BtnSetup>
                </ContainerSection>
            </ContainerContent>
        </Container>
    );
};

export default SetupScreen;
