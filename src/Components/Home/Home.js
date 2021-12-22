import React, { useEffect, useRef, useState } from 'react';
import {FormHome} from './FormHome';
import Lane from '../../assets/Lane.png'
import {
    Container,
    ContainerHome,
    ContainerCounter, 
    SpanCounter, 
    PCounter, 
    NoImg, 
    LineHome
} from './styles';



export function Home() {

    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSeconds, setTimerSeconds] = useState("00")

    let interval = useRef()

    const startTimer = () => {
        const countdouwnDate = new Date("sept 25, 2022 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdouwnDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our time
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    useEffect(() => {
        startTimer();

        // return ()=>{

        //     clearInterval(interval.current);
        // }
    })

    return (
        <ContainerHome>
            <Container>
                <ContainerCounter className="hours animate__animated animate__zoomIn animate__delay-1s">
                    <PCounter>{timerHours}</PCounter>
                    <SpanCounter>hours</SpanCounter>
                </ContainerCounter>

                <ContainerCounter className="minutes animate__animated animate__zoomIn animate__delay-1s">
                    <PCounter>{timerMinutes}</PCounter>
                    <SpanCounter>minutes</SpanCounter>
                </ContainerCounter>

                <ContainerCounter className="seconds animate__animated animate__zoomIn animate__delay-1s">
                    <PCounter>{timerSeconds} </PCounter>
                    <SpanCounter>seconds</SpanCounter>
                </ContainerCounter>
            </Container>

            <Container>
                <NoImg />
                <ContainerCounter className="days">
                    <PCounter>{timerDays}</PCounter>
                    <SpanCounter>days</SpanCounter>
                </ContainerCounter>
            </Container>
            <LineHome src={Lane} alt="linha" />
            <FormHome />
        </ContainerHome>
    )

}