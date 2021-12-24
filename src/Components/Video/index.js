import React from "react"
import { VideoBack } from "./styles"
import Clash_Cards_Champions from '../../assets/videonow/Clash_Cards_Champions.mp4'

export function Video (){
    return(
        <VideoBack autoPlay muted loop>
            <source src={Clash_Cards_Champions} />
        </VideoBack>
    )
}