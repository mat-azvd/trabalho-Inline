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

} from "./StoreRegisterElements";
import { Button } from "../ButtonElements";
import storeService from "../../services/store";
import { useHistory } from "react-router-dom";
import { formatCnpj } from "../../utils/helpers";


const StoreRegister = () => {
    const [hover, setHover] = useState(false);
    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();

    const onHover = () => {
        setHover(!hover);
    };

    async function onSubmit() {

        try {
            const loja = await storeService.create({
                nome: name,
                cnpj: cnpj,
                endereco: address,
                telefone: phone,

            });

            history.push(`/signin/${loja._id}`);
        } catch (error) {
            alert(error.message);
        }
    }




    return (
        <SectionContainer>
            <SectionContent>
                <WhiteBG>
                    <h1>Cadastro da Loja</h1>
                    <LabelTitle>Nome da Loja</LabelTitle>
                    <InputSetup type="nome" placeholder="Nome da loja" onChange={(e) => setName(e.target.value)}></InputSetup>
                    <LabelTitle>CNPJ</LabelTitle>
                    <InputSetup placeholder="CNPJ" onChange={(e) => setCnpj(formatCnpj(e.target.value))} value={cnpj}></InputSetup>
                    <LabelTitle>Endereço</LabelTitle>
                    <InputSetup type="text" placeholder="Endereço" onChange={(e) => setAddress(e.target.value)}></InputSetup>
                    <LabelTitle>Telefone</LabelTitle>
                    <InputSetup type="tel" placeholder="Telefone ou Celular" onChange={(e) => setPhone(e.target.value)}></InputSetup>

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

export default StoreRegister;