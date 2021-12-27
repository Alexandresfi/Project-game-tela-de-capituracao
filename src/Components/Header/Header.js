import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import {
    Menu,
    LiHeader,
    LineAbout,
    LineContact,
    UlHeader,
    MenuMobile
} from './styles'

export default function Hearder() {
    const [cssAbout, setCssAbout] = useState(false)
    const [cssContact, setCssContact] = useState(false)
    const [cssMobile, setCssMobile] = useState(false)


    return (
        <Menu>
            <Link to="/">
                <img src={Logo} alt="logo" width="65px" />
            </Link>

            <nav>
                <UlHeader>
                    <LiHeader>
                        <Link to="/about"
                            onMouseEnter={() => setCssAbout(true)}
                            onMouseLeave={() => setCssAbout(false)}>
                            About us
                            <LineAbout houver={cssAbout} />
                        </Link>
                    </LiHeader>
                    <LiHeader>
                        <Link to="/contact"
                            onMouseEnter={() => setCssContact(true)}
                            onMouseLeave={() => setCssContact(false)}
                        >
                            Contact
                            <LineContact houver={cssContact} />
                        </Link>
                    </LiHeader>
                </UlHeader>
            </nav>
            <MenuMobile onClick={() => {setCssMobile(!cssMobile)}} menu={cssMobile}/>
        </Menu>
    )
}