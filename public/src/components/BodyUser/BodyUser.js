import React, { useState } from "react";
import {
    ArrowForward,
    ArrowRight,
    SectionContainer,
    SectionContent,
    SectionWrapper,
    SectionTopWrapper,
    WhiteBG,


} from "./BodyUserElements";
import { Button } from "../ButtonElements";


const BodyUser = () => {
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
                    
                </WhiteBG>
                <SectionWrapper>
                    <Button to="enter" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Sign in {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </SectionWrapper>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodyUser;
