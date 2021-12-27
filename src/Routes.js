import React from "react"
import { Route, Switch } from "react-router-dom"
import Hearder from "./Components/Header/Header"

import { Home } from "./Components/Home/Home";
import { Contact } from './Components/Contact'
import { About } from "./Components/AboutUs"
import { Nav } from "./Components/Nav"
import { Video } from "./Components/Video";

export default function Rotas() {
    return (
        <Switch>
            <div className="app">
                <Video />
                <Hearder />
                <Nav />
                <Route exact path="/">
                    <Home />       
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/contact">
                    <Contact />
                </Route>
            </div>
        </Switch>
    )
}