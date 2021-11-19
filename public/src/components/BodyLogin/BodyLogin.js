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

} from "./BodyLoginElements";
import { Button } from "../ButtonElements";

import {
    FormInput,
} from "../CreateQueue/CreateQueueElements";


const BodyLogin = (props) => {
    const [hover, setHover] = useState(false);
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const onHover = () => {
        setHover(!hover);
    };

    function onSubmit() {
        props.onSubmit(cpf, senha);
    }

    return (
        <SectionContainer>
            <SectionContent>
                <SectionTopWrapper>
                    <SectionTitle> </SectionTitle>
                </SectionTopWrapper>
                <WhiteBG>
                    <h1>LOGIN</h1>
                    <LabelTitle>CPF:</LabelTitle>

                    <FormInput
                        type="text"
                        name="cpf"
                        placeholder="Digite o seu CPF"
                        onChange={(e) => setCpf(e.target.value)}
                    />

                    <LabelTitle>Senha</LabelTitle>
                    <FormInput
                        type="password"
                        name="senha"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <div className="row">
                        <p>Ainda não possui conta?</p><a>Cadastre-se</a>
                    </div>
                </WhiteBG>

                <SectionWrapper>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover} onClick={() => onSubmit()}>
                        LOGIN {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodyLogin;
