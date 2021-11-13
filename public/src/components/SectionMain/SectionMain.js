import React, { useState } from "react";
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

import { BsInfoCircle } from "react-icons/bs";
import { Button } from "../ButtonElements";
import QrCodeReader from "./QrCodeReader";
import Queue from "../../pages/Queue";

const SectionMain = () => {
    const [hover, setHover] = useState(false);
    const [textQrCode, setTextQrCode] = useState("");

    const onHover = () => {
        setHover(!hover);
    };

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
                            <QrCodeReader textQrCode={textQrCode}></QrCodeReader>
                        </ImgCode>
                        <input
                            value={textQrCode}
                            onChange={(e) => setTextQrCode(e.target.value)}
                            placeholder="Ou digite o código da fila"
                        ></input>
                    </SectionQrCode>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover}>
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
