import React from 'react';
import { AreaForm } from '../Styled';

export default function AboutForm() {
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

                <form>
                    <input type="email" name="email" placeholder="Enter your the best email" />
                    <button type="submit">Notify Me</button>
                </form>

            </div>


            <p className="h3">*Hey, don’t worry we will not  spam  you 😁</p>



        </AreaForm>
    )
}