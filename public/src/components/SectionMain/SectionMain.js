import React, { useEffect, useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    Icon,
    ImgCode,
    SectionContainer,
    SectionContent,
    SectionQrCode,
    SectionRowCreate,
    SectionTitle,
    SectionTopWrapper,
    SectionWrapper,
} from "./SectionMainElements";
import { useParams } from "react-router-dom";

import { BsInfoCircle } from "react-icons/bs";
import { Button } from "../ButtonElements";
import QrCodeReader from "./QrCodeReader";
import Queue from "../../pages/Queue";
import queueService from '../../services/queue'
import { useHistory } from "react-router-dom";


const SectionMain = () => {
    const [hover, setHover] = useState(false);
    const [textQrCode, setTextQrCode] = useState("");
    const history = useHistory();
    let { queueCode } = useParams();

    const onHover = () => {
        setHover(!hover);
    };

    useEffect(() => {
        if (queueCode) {
            enterQueue(queueCode);
        }
    }, [])

    function onSubmit (code) {
        if (!localStorage.getItem('token')) {
            localStorage.setItem('code', code);
            return history.push('/login')
        }

        enterQueue(code)
    }

    async function enterQueue(code) {
        try {

            const queue = await queueService.enter(code);

            history.push(`/user/queue/${queue.filaId}`);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <SectionContainer>
            <SectionContent>
                <SectionTopWrapper>
                    <SectionTitle>Scan QR Code para acesso a fila</SectionTitle>
                    <Icon>
                        <BsInfoCircle />
                    </Icon>
                </SectionTopWrapper>
                <SectionWrapper>
                    <SectionQrCode>
                        <ImgCode>
                            <QrCodeReader onSubmit={onSubmit}></QrCodeReader>
                        </ImgCode>
                        <input
                            value={textQrCode}
                            onChange={(e) => setTextQrCode(e.target.value)}
                            placeholder="Ou digite o código da fila"
                        ></input>
                    </SectionQrCode>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover} onClick={() => onSubmit(textQrCode)}>
                        ENTRAR {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    <SectionRowCreate>
                        <h4>
                            Crie sua própria fila{" "}
                            <a href="/create-queue" onClick={Queue}>
                                AQUI
                            </a>
                        </h4>
                    </SectionRowCreate>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default SectionMain;
