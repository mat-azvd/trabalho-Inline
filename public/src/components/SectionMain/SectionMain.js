import React, { useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    Icon,
    ImgCode,
    SectionContainer,
    SectionContent,
    // SectionBg,
    // SectionIcon,
    // SectionLogo,
    SectionQrCode,
    SectionRowCreate,
    SectionTitle,
    SectionTopWrapper,
    SectionWrapper,
} from "./SectionMainElements";
// import ImgBack from "../../assets/img1.jpeg";
import { BsInfoCircle } from "react-icons/bs";
import { Button } from "../ButtonElements";
import QrCodeReader from "./QrCodeReader";
import CreateQueue from "../CreateQueue/CreateQueue";

const SectionMain = () => {
    const [hover, setHover] = useState(false);
    const [textQrCode, setTextQrCode] = useState("");

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SectionContainer>
            <SectionContent>
                {/* <SectionLogo to="/">
          Inline
          <SectionIcon />
        </SectionLogo> */}
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
                            <a href="/create-queue" onClick={CreateQueue}>
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
