import React from "react";
import { AreaFormContact } from "../Styled";


export default function ContactForm(){
    return(
        <AreaFormContact>
        
        <div className="containerLine">
                <div className="LineForm" />
                <p>Comingo Soon</p>
            </div>


            <h1>
                Write to us
            </h1>

            <p className="pequeno">
                Need help? Send us a message?
            </p>

            <form action="https://clashcardschampions.us5.list-manage.com/subscribe/post?u=6943f6e71bf8eb5b548f2b102&amp;id=74b53d7790" 
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" 
                class="validate" target="_blank" novalidate>
                    
                <input className="SameThing" type="text" name="FMANE" placeholder="Name"/>
                <input className="SameThing" type="email" name="EMAIL" placeholder="Email address" />
                <input className="SameThing Big" type="text" name="MESSAGE" placeholder="Message"/>

                <button type="submit">Submit</button>
            </form>
        
        
        </AreaFormContact>
    )
}
