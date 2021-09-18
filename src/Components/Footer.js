import React from "react";
import { Link } from "react-router-dom";

export default function Footer () {
    return(
        <footer>
            <p to="/about" className="footer">
                <Link>
                    About us
                    <div className="circule"/>
                </Link>
            </p>
        </footer>
    )
}