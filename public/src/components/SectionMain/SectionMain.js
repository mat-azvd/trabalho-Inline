import React, { useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    Icon,
    ImgBg,
    ImgCode,
    SectionBg,
    SectionContainer,
    SectionContent,
    SectionTitle,
    SectionWrapper,
    SectionTopWrapper,
    SectionQrCode
} from "./SectionMainElements";
import Img from "../../assets/img1.jpeg";
import ImgCod from "../../assets/code.png";
import { BsInfoCircle } from "react-icons/bs";
import { Button } from "../ButtonElements";
import QrCodeReader from "./QrCodeReader";

const SectionMain = () => {
    const [hover, setHover] = useState(false);
    const [textQrCode, setTextQrCode] = useState("");

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SectionContainer>
            <SectionBg>{/* <ImgBg src={ImgBack} type="image/png" /> */}</SectionBg>
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
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default SectionMain;
