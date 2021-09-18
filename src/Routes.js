import React from "react";
import { Route, Switch } from "react-router-dom";
import Hearder from "./Components/Header/Header";
import Nav from "./Components/Header/Nav/Nav";
import SideBalls from "./Components/SideBall";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import Clash_Cards_Champions from './assets/videonow/Clash_Cards_Champions.mp4'
import About from "./AboutUs/About";


export default function Rotas (){
    return(

        <Switch>
        
        <div className="app">
            <video autoPlay muted loop className="bg_video">
            <source src={Clash_Cards_Champions} type="video/mp4"/>
            </video>

            <Hearder/>
            <Nav/>
            <SideBalls/>

            <Route exact path="/">
                
                <Home/>
            </Route>

            <Route exact path="/about">
                <About/>
            </Route>

            <Footer/>













        </div>









        </Switch>
    )
}