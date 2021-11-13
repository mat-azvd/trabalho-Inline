import React from "react";
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

const SetupScreen = () => {
    return (
        <Container>
            <SidebarSetup />
            <ContainerContent>
                <ContainerSection>
                    <h1>Alterar nome</h1>
                    <LabelTitle>Nome anterior</LabelTitle>
                    <InputSetup placeholder="nome anterior"></InputSetup>
                    <LabelTitle>Nome Novo</LabelTitle>
                    <InputSetup placeholder="nome novo"></InputSetup>
                    <BtnSetup>
                        <Btn>Alterar</Btn>
                    </BtnSetup>
                </ContainerSection>
            </ContainerContent>
        </Container>
    );
};

export default SetupScreen;
