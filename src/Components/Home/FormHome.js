import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from '../../assets/GifAnimation.json'
import { AreaForm, ButtonForm, ContainerLineForm, H1Container, H3Form, InputForm, LineForm, PSmall,Form } from "../AboutUs/styles";


export function FormHome (){

    const[animationState]= useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {   
        loop : true, 
        autoplay : true,  
        animationData :  animationData,
        rendererSettings : { 
          preserveAspectRatio : 'fatia xMidYMid' 
        }
      } ;

    return(
        <AreaForm className="animate__animated animate__slideInRight"> 

            <ContainerLineForm>
                <LineForm/>
                <p>Coming Soon</p>
            </ContainerLineForm>
            

            <H1Container>
                Get Notified
                When we Launch
            </H1Container>

            <PSmall>
                New Creation. New Culture. New Game. An awesome new company.
                Our website will be available here soon.
            </PSmall>


            <Form 
                action="https://clashcardschampions.us5.list-manage.com/subscribe/post?u=6943f6e71bf8eb5b548f2b102&amp;id=74b53d7790"
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank">

                        <InputForm type="email" name="EMAIL" placeholder="Enter your the best email"/>
                        <ButtonForm type="submit">

                            <div>
                            <Lottie options = { defaultOptions } 
                                altura = { 14 }
                                largura = { 14 }
                                isStopped = { animationState.isStopped }
                                isPaused = { animationState.isPaused } />
                            </div>
                            <p>Notify Me</p>

                        </ButtonForm>
                </Form>


            <H3Form>*Hey, don’t worry we will not  spam  you 😁</H3Form>

            

        </AreaForm>
    )
}