import React from "react";
import { AreaForm } from "./Styled";

export default function Form (props){
    return(
        <AreaForm className="animate__animated animate__slideInRight"> 

            <div className="containerLine">
                <div className="LineForm"/>
                <p>Comingo Soon</p>
            </div>
            

            <h1>
                Get Notified
                When we Launch
            </h1>

            <p className="pequeno">
                New Creation. New Culture. New Game. An awesome new company.
                Our website will be available here soon.
            </p>

            <div className="containerForm">

                <form>
                        <input type="email" name="email" placeholder="Enter your the best email"/>
                        <button type="submit">Notify Me</button>
                </form>

            </div>


            <p className="h3">*Hey, don’t worry we will not  spam  you 😁</p>

            

        </AreaForm>
    )
}