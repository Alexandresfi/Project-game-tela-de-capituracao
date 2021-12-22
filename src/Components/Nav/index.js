import React from 'react';
import Tele from '../../assets/Nave/Telegram.png'
import Dis from '../../assets/Nave/Discord.png'
import Linkedin from '../../assets/Nave/Linkedin.png'
import Twiter from '../../assets/Nave/Twiter.png'
import Youtube from '../../assets/Nave/Youtube.png'
import { ContainerNav, LinkAnimation, PNav, UlNav } from './styles'


export function Nav() {

    return (
        <ContainerNav>
            <UlNav>
                <li>
                    <LinkAnimation href=" https://t.me/ClashCardsChampions">
                        <img src={Tele} alt="telegram" />
                        <PNav>/ClashCardsChampions</PNav>
                    </LinkAnimation>
                </li>

                <li>
                    <LinkAnimation href='#'>
                        <img src={Dis} alt="discord" />
                        <PNav>clashcardschamPNavions</PNav>
                    </LinkAnimation>
                </li>

                <li>
                    <LinkAnimation href=" https://twitter.com/ClashCards">
                        <img src={Twiter} alt="twiter" />
                        <PNav>/clashcardschampions</PNav>
                    </LinkAnimation>
                </li>

                <li>
                    <LinkAnimation href="https://www.linkedin.com/company/clash-cards-champions">
                        <img src={Linkedin} alt="linkedin" />
                        <PNav>/clashcardschampions</PNav>
                    </LinkAnimation>
                </li>

                <li>
                    <LinkAnimation href="https://youtube.com/channel/UCOFnT7y7E1uFs1E-JHLRi_Q">
                        <img src={Youtube} alt="youtube" />
                        <PNav>/clashcardschampions</PNav>
                    </LinkAnimation>
                </li>
            </UlNav>
        </ContainerNav>
    )
}