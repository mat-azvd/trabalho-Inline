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
    SectionQrCodeImg
} from "./SectionMainElements";
import Img from "../../assets/img1.jpeg";
import ImgCod from "../../assets/code.png";
import { BsInfoCircle } from "react-icons/bs";
import { Button } from "../ButtonElements";

const SectionMain = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SectionContainer>
            <SectionBg>
                <ImgBg src={Img} type="image/png" />
            </SectionBg>
            <SectionContent>
                <SectionTitle>Scan QR Code para acesso a fila</SectionTitle>
                <Icon>
                    <BsInfoCircle />
                </Icon>
                <SectionQrCodeImg>
                    <ImgCode src={ImgCod} type="Image/png" />
                </SectionQrCodeImg>
                <SectionWrapper>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover}>
                        ENTRAR {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default SectionMain;
