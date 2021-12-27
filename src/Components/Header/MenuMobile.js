import React from "react"
import { Link } from "react-router-dom"
import { ContainerImg, LiMobile, Menumobile, SpanContent, SpanTitle } from "./styles"
import Tele from '../../assets/Nave/Telegram.png'
import Dis from '../../assets/Nave/Discord.png'
import Linkedin from '../../assets/Nave/Linkedin.png'
import Twiter from '../../assets/Nave/Twiter.png'
import Youtube from '../../assets/Nave/Youtube.png'

export function MenuMobile({menu}) {
    return (
        <Menumobile Menu={menu}>
            <nav>
                <ul>
                    <LiMobile>
                        <SpanTitle>
                            WELCOME
                        </SpanTitle>
                        
                        <Link to='/'>
                            <SpanContent>
                                HOME
                            </SpanContent>
                        </Link>

                    </LiMobile>

                    <LiMobile>
                        <SpanTitle>
                            HISTORY
                        </SpanTitle>
                        <Link to='/about'>
                            <SpanContent>
                                ABOUT US
                            </SpanContent>
                        </Link>
                    </LiMobile>

                    <LiMobile>
                        <SpanTitle>
                            NICE TO MEET YOU
                        </SpanTitle>
                        <Link to='/contact'>
                            <SpanContent>
                                CONTACT
                            </SpanContent>
                        </Link>
                    </LiMobile>

                </ul>

                <ContainerImg>
                    <a href="https://t.me/ClashCardsChampions">
                        <img src={Tele} alt='telegram' />
                    </a>

                    <a href=' # '>
                        <img src={Dis} alt='discord' />
                    </a>

                    <a href="https://twitter.com/ClashCards">
                        <img src={Twiter} alt='twiter' />
                    </a>

                    <a href="https://www.linkedin.com/company/clash-cards-champions">
                        <img src={Linkedin} alt='linkedim' />
                    </a>

                    <a href="https://youtube.com/channel/UCOFnT7y7E1uFs1E-JHLRi_Q">
                        <img src={Youtube} alt='youtube' />
                    </a>

                </ContainerImg>
            </nav>
        </Menumobile>
    )
}