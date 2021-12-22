import React, { useState } from 'react';
import Lottie from "react-lottie";
import animationData from '../../assets/GifAnimation.json'
import { 
    AreaForm,
    ButtonForm, 
    ContainerLineForm, 
    Form, 
    H1Container, 
    H3Form, 
    InputForm, 
    LineForm, 
    PSmall 
} from './styles'

export function FormAbout() {

    const [animationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'fatia xMidYMid'
        }
    };

    return (
        <AreaForm>

            <ContainerLineForm>
                <LineForm />
                <p>Coming Soon</p>
            </ContainerLineForm>


            <H1Container>
                About Us
            </H1Container>

            <PSmall>
                Clash Cards Champions is a turn-based NFT card dueling platform where users have exciting
                battles with the goal of becoming the king of NFT duels. The platform comprises three main
                functions:
            </PSmall>

            <ul>
                <li>CCC Marketplace</li>
                <li>Battle Center</li>
                <li>CCC-Farm</li>
            </ul>

                <Form
                    action="https://clashcardschampions.us5.list-manage.com/subscribe/post?u=6943f6e71bf8eb5b548f2b102&amp;id=74b53d7790"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    novalidate>

                    <InputForm type="email" name="EMAIL" placeholder="Enter your the best email" />

                    <ButtonForm type="submit">
                        <div>
                            <Lottie options={defaultOptions}
                                altura={14}
                                largura={14}
                                isStopped={animationState.isStopped}
                                isPaused={animationState.isPaused} />
                        </div>
                        <p>Notify Me</p>
                    </ButtonForm>
                </Form>

            <H3Form>*Hey, don’t worry we will not  spam  you 😁</H3Form>

        </AreaForm>
    )
}
