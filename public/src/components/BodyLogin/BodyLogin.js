import React, { useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    SectionContainer,
    SectionContent,
    SectionWrapper,
    WhiteBG,
    LabelTitle,

} from "./BodyLoginElements";
import { Button } from "../ButtonElements";

import {
    FormInput,
} from "../CreateQueue/CreateQueueElements";
import { useHistory } from "react-router-dom";
import formatCPF from "../../utils/helpers";

const BodyLogin = (props) => {
    const [hover, setHover] = useState(false);
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const onHover = () => {
        setHover(!hover);
    };

    function onSubmit() {
        props.onSubmit(cpf, senha);
    }

    function onRedirect() {
        history.push(`/signin`);
    }

    function onRedirectCreteStore (params) {
        history.push(`/store-register`);
    }

    return (
        <SectionContainer>
            <SectionContent>
                <WhiteBG>
                    <h1>LOGIN</h1>
                    <LabelTitle>CPF:</LabelTitle>

                    <FormInput
                        type="text"
                        name="cpf"
                        placeholder="Digite o seu CPF"
                        onChange={(e) => setCpf(formatCPF(e.target.value))}
                        value={cpf}
                        maxLength="14"
                    />

                    <LabelTitle>Senha</LabelTitle>
                    <FormInput
                        type="password"
                        name="senha"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <div className="row">
                        <p>Ainda não possui conta?</p><a onClick={() => onRedirect()}>Cadastre-se</a>
                    </div>

                </WhiteBG>
                    <div style={{
                        marginTop: '20px',
                        textAlign: 'center',
                        fontSize: '12px',
                        color: '#fff',
                        cursor: 'pointer'
                    }}>
                        <a onClick={() => onRedirectCreteStore()}>Clique aqui para cadastrar a sua loja</a>
                    </div>

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
