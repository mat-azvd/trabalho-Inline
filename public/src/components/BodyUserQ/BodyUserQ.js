import React, { useState, useEffect } from "react";
import {
    SectionContainer,
    SectionContent,
    SectionTopWrapper,
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
    let interval;

    useEffect(() => {
        getUserQueue()
        getQueue()
        createInterval()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function createInterval () {
        console.log('Registrou interval')
        interval = setInterval(() => {
            getUserQueue()
        }, 10 * 1000);
    }

    async function getQueue() {
        const info = await queueService.get(queueId);

        setNameQueue(info.nome);
    }

    async function getUserQueue() {
        try {
            const info = await queueService.getInfoUser(queueId)
            const timeFormatted = new Date((info.tempoPrevistoAtendimento || 60) * 1000).toISOString().substr(11, 8)

            if (!info) {
                alert('Você foi removido ou não se encontra mais na fila')
                clearInterval(interval)
                return history.push(`/`);
            }

            setPosition(info.posicao)
            setTime(timeFormatted)
        } catch (error) {
            alert(error.message)
        }
    }

    async function exitQueue() {
        try {
            await queueService.exit(queueId)

            history.push(`/`);
        } catch (error) {
            alert(error.message)
        }
    }

    function getLabelPosition() {
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
                <ExitQ onClick={() => exitQueue()}>SAIR</ExitQ>

            </SectionContent>
        </SectionContainer>
    );
};

export default BodyUserQ;
