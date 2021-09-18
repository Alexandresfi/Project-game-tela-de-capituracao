import React from 'react';
import Tele from '../../../assets/Nave/Telegram.png'
import Dis from '../../../assets/Nave/Discord.png'
import Linkedin from '../../../assets/Nave/Linkedin.png'
import Twiter from '../../../assets/Nave/Twiter.png'
import Youtube from '../../../assets/Nave/Youtube.png'
import { Navigation } from '../../Styled';

export default function Nav (){

    return(
        <Navigation>
            <ul>
                <li>
                    <div className="anima">
                        <img src={Tele} alt="telegram"/>                    
                        <p>/ClashCardsChampions</p>
                    </div>
                </li>

                <li>
                    
                    <a href="https://t.me/ClashCardsChampions" className="anima">
                        <img src={Dis} alt="instagram"/>          
                        <p>clashcardschampions</p>
                    </a>

                </li>

                <li>
                    <a href=" https://twitter.com/ClashCards" className="anima">
                        <img src={Twiter} alt="twiter"/>
                        <p>/clashcardschampions</p>
                    </a>
                    

                </li>
                    
                <li>
                    <a href="https://www.linkedin.com/company/clash-cards-champions" className="anima">
                        <img src={Linkedin} alt="linkedin"/>
                        <p>/clashcardschampions</p>
                    </a>
                </li>

                <li>
                    <a href="https://youtube.com/channel/UCOFnT7y7E1uFs1E-JHLRi_Q" className="anima">
                        
                        <img src={Youtube} alt="youtube"/>
                        <p>/clashcardschampions</p>
                        
                    </a>
                </li>

            </ul>
        </Navigation>
    )
}