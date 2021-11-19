import React, { useState, useEffect } from "react";
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
} from "./BodyUserQElements";
import { useParams } from "react-router-dom";
import queueService from '../../services/queue';
import { useHistory } from "react-router-dom";

const BodyUserQ = () => {
    const [position, setPosition] = useState(false);
    const [time, setTime] = useState('');
    const [nameQueue, setNameQueue] = useState("");
    let { queueId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getUserQueue()
        getQueue()
    }, [])

    async function getQueue() {
        const info = await queueService.get(queueId);

        setNameQueue(info.nome);
    }

    async function getUserQueue () {
        try {
            const info = await queueService.getInfoUser(queueId)
            const timeFormatted = new Date((info.tempoPrevistoAtendimento || 0) * 1000).toISOString().substr(11, 8)

            setPosition(info.posicao)
            setTime(timeFormatted)
        } catch (error) {
            alert(error.message)
        }
    }

    async function exitQueue () {
        try {
            await queueService.exit(queueId)

            history.push(`/`);
        } catch (error) {
            alert(error.message)
        }
    }

    function getLabelPosition () {
        if (position === 1) {
            return <PositionQ>Próximo</PositionQ>
        }

        return <PositionQ>{position}º</PositionQ>
    }

    return (
        <SectionContainer>
            <SectionContent>
                <SectionTopWrapper>
                </SectionTopWrapper>
                <WhiteBG>
                    <h1>{nameQueue}</h1>
                    <WrapperPosition>
                        <p>Você está no</p>

                        {getLabelPosition()}
                        <p>lugar da fila</p>
                    </WrapperPosition>
                    <WrapperTime>
                        <p>Seu tempo estimado de espera:</p>
                        <TimeCounter>{time}</TimeCounter>
                    </WrapperTime>
                    <ExitQ onClick={() => exitQueue()}>Sair</ExitQ>
                </WhiteBG>
            </SectionContent>
        </SectionContainer>
    );
};

export default BodyUserQ;
