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

} from "./BodyLoginElements";
import { Button } from "../ButtonElements";


const BodyLogin = () => {
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
                    <h1>LOGIN</h1>
                    <LabelTitle>Usuário</LabelTitle>
                    <InputSetup placeholder="Jose_da_Silva"></InputSetup>
                    <LabelTitle>Senha</LabelTitle>
                    <InputSetup type="password"></InputSetup>
                    <p>Ainda não possui conta?</p><a>Cadastre-se</a>
                </WhiteBG>
                <SectionWrapper>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover}>
                        LOGIN {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodyLogin;
