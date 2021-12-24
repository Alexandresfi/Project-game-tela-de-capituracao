import React from "react";
import { Circule, LinkFooter } from "./styles";

export function Footer() {
    return (
        <LinkFooter to="/about">
            About us
            <Circule/>
        </LinkFooter>
    )
}