import React, { useState } from 'react';
import Lottie from "react-lottie";
import animationData from '../../assets/GifAnimation.json'
import { AreaForm } from '../Styled';

export default function AboutForm() {

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

    return (
        <AreaForm>

            <div className="containerLine">
                <div className="LineForm" />
                <p>Comingo Soon</p>
            </div>


            <h1>
                About Us
            </h1>

            <p className="pequeno">
                Clash Cards Champions is a turn-based NFT card dueling platform where users have exciting 
                battles with the goal of becoming the king of NFT duels. The platform comprises three main 
                functions:
            </p>

            <ul>
                <li>CCC Marketplace</li>
                <li>Battle Center</li>
                <li>CCC-Farm</li>
            </ul>

            <div className="containerForm">

                <form action="https://clashcardschampions.us5.list-manage.com/subscribe/post?u=6943f6e71bf8eb5b548f2b102&amp;id=74b53d7790"
                 method="post" 
                 id="mc-embedded-subscribe-form" 
                 name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                        

                    <input type="email" name="EMAIL" placeholder="Enter your the best email" />
                    <button type="submit">

                        <div  className="notification">
                            <Lottie options = { defaultOptions } 
                            altura = { 14 }
                            largura = { 14 }
                            isStopped = { animationState.isStopped }
                            isPaused = { animationState.isPaused } />
                        </div>
                        <p>Notify Me</p>

                    </button>
                </form>

            </div>


            <p className="h3">*Hey, don’t worry we will not  spam  you 😁</p>



        </AreaForm>
    )
}
