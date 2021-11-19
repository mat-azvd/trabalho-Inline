import React, { useState } from "react";
import {
    SectionContainer,
    SectionContent,
    SectionTopWrapper,
    WhiteBG,
    WrapperPosition,
    PositionQ,
    WrapperTime,
    TimeCounter,
    ExitQ,
    GiveQ,
} from "./BodyUserQElements";


const BodyUserQ = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SectionContainer>
            <SectionContent>
                <SectionTopWrapper>
                </SectionTopWrapper>
                <WhiteBG>
                    <h1>Nome Fila</h1>
                    <WrapperPosition>
                        <p>Você está no</p>
                        <PositionQ>Xº</PositionQ>
                        <p>lugar da fila</p>
                    </WrapperPosition>
                    <WrapperTime>
                        <p>Seui tempo estimado de espera:</p>
                        <TimeCounter>00:14:52</TimeCounter>
                    </WrapperTime>
                    <GiveQ>Ceder</GiveQ>
                    <ExitQ>Sair</ExitQ>
                </WhiteBG>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodyUserQ;
