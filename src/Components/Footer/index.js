import React, {useEffect, useState} from "react";
import { Circule, LinkFooter } from "./styles";

export function Footer() {
    const [position, setPosition] = useState(true)

    const route = window.location.pathname
    
    useEffect(()=>{
        route ==='/contact' ? setPosition(true) : setPosition(false)
    }, [route])

    return (
        <LinkFooter to="/about" Position={position} >
            About us
            <Circule/>
        </LinkFooter>
    )
}