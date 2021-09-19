import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

import { Menu } from '../Styled'



export default function Hearder (){
    return(
        <>
            <Menu>
                <Link to="/">
                    <img src={Logo} alt="logo" width="65px"/>
                </Link>
                <nav>
                    <ul>
                        <li className="teste">

                            <Link to="/about">
                                About us
                                <div className="subli"/>
                            </Link>

                        </li>
                        
                        <li className="teste">

                            <Link to="/contact">
                                Contact
                                <div className="subli1"/>
                            </Link>
                            
                        </li>

                    </ul>
                </nav>
            </Menu>

        </>
    )
}