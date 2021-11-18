import React, { useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    SectionContainer,
    SectionContent,
    SectionTitle,
    SectionWrapper,
    SectionTopWrapper,
    WhiteBG,
    LabelTitle,
    InputSetup,

} from "./BodySignElements";
import { Button } from "../ButtonElements";


const BodySign = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SectionContainer>
            <SectionContent>
                
                <SectionTopWrapper>
                    <SectionTitle> </SectionTitle>
                </SectionTopWrapper>
                <WhiteBG>
                    <h1>Sign-in</h1>
                    <LabelTitle>Usuário</LabelTitle>
                    <InputSetup placeholder="Jose_da_Silva"></InputSetup>
                    <LabelTitle>Email</LabelTitle>
                    <InputSetup type="email" placeholder="josedasilva@gmail.com"></InputSetup>
                    <LabelTitle>Senha</LabelTitle>
                    <InputSetup type="password"></InputSetup>
                    <LabelTitle>Confirmar Senha</LabelTitle>
                    <InputSetup type="password"></InputSetup>
                </WhiteBG>
                <SectionWrapper>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Sign in {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodySign;
