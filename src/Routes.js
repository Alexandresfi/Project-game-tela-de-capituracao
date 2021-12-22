import React from "react";
import { Route, Switch } from "react-router-dom";
import Hearder from "./Components/Header/Header";

import {Home} from "./Components/Home/Home";
import Footer from "./Components/Footer";
import FooterContact from "./Components/Contact/Footer"

import Clash_Cards_Champions from './assets/videonow/Clash_Cards_Champions.mp4'

import {Contact} from './Components/Contact'
import { About } from "./Components/AboutUs"
import { Nav } from "./Components/Nav"



export default function Rotas (){
    return(

        <Switch>
        
        <div className="app">
            <video autoPlay muted loop className="bg_video">
            <source src={Clash_Cards_Champions} type="video/mp4"/>
            </video>

            <Hearder/>
            <Nav/>
            

            <Route exact path="/">
                
                <Home/>
                <Footer/>
            </Route>

            <Route exact path="/about">
                <About/>
                <Footer/>
            </Route>


            <Route exact path="/contact">
                <Contact/>
                <FooterContact/>
            </Route>

        </div>

        </Switch>
    )
}