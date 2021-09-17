import React from 'react'
import Logo from '../../assets/Logo.svg'
import Vector from '../../assets/Vector.png'
import { Menu } from '../Styled'



export default function Hearder (){
    return(
        <>
            <Menu>
                <img src={Logo} alt="logo"/>

                <nav>
                    <ul>
                        <li className="teste">
                            About us
                            <div className="subli"/>
                        </li>
                        
                        <li className="teste">
                            Contact
                            <div className="subli1"/>
                        </li>

                        <li>
                        <img src={Vector} alt="menu"/>
                        </li>
                    </ul>
                </nav>
            </Menu>

        </>
    )
}