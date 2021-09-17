import React from 'react';
import Face from '../../../assets/Nave/Facebook.png'
import Insta from '../../../assets/Nave/Instagram.png'
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
                    <img src={Face} alt="facebook"/>                    
                    
                    <p>/clashcardschampions</p>
                    </div>
                </li>

                <li>
                    <div className="anima">
                        <img src={Insta} alt="instagram"/>          
                        <p>@clashcardschampions</p>
                    </div>

                </li>

                <li>
                    <div className="anima">
                        <img src={Twiter} alt="twiter"/>
                        <p>/clashcardschampions</p>
                    </div>
                    

                </li>
                    
                <li>
                    <div className="anima">
                        <img src={Linkedin} alt="linkedin"/>
                        <p>/clashcardschampions</p>
                    </div>
                </li>

                <li>
                    <div className="anima">
                        <img src={Youtube} alt="youtube"/>
                    
                        <p>/clashcardschampions</p>
                    </div>
                </li>

            </ul>
        </Navigation>
    )
}