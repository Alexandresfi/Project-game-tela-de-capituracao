import React, { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Lane from '../assets/Lane.png'
import { Contador } from './Styled'


export default function Home (){

    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSeconds, setTimerSeconds] = useState("00")

    let interval = useRef()

    const startTimer = () => {
        const countdouwnDate = new Date("sept 25, 2022 00:00:00").getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdouwnDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                //stop our time
                clearInterval(interval.current)
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    useEffect(()=>{
        startTimer();
        
        // return ()=>{
            
        //     clearInterval(interval.current);
        // }
    })

    return(
        <Contador>

            <div className="coluna1">
                <div className="time hours animate__animated animate__zoomIn animate__delay-1s">

                    <p>{timerHours}</p>

                     <span>hours</span>
                </div>

                <div className="time minutes animate__animated animate__zoomIn animate__delay-1s">

                    <p>{timerMinutes}</p>

                    <span>minutes</span>

                </div>

                <div className="time seconds animate__animated animate__zoomIn animate__delay-1s">

                    <p>{timerSeconds} </p>

                    <span>seconds</span>
                </div>
            </div>

            
            <div className="coluna2">
                <div className="time images">
                    
                </div>

                <div className="time days">

                    <p>{timerDays}</p>

                    <span>days</span>
                </div>
            </div>

            <img src={Lane} alt="linha" className="Line"/>

           <Form/>
            
          
        </Contador>
    )

}