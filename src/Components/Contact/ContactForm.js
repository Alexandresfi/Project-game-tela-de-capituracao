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

            <form>
                <input className="SameThing" type="text" name="name" placeholder="Name"/>
                <input className="SameThing" type="email" name="email" placeholder="Email address" />
                <input className="SameThing Big" type="text" name="menssage" placeholder="Message"/>

                <button type="submit">Submit</button>
            </form>

        
        
        
        </AreaFormContact>
    )
}