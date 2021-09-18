import React from 'react';
import NTF from '../assets/about/NFT.png'
import ArrowLeft from '../assets/about/ArrowLetf.png'
import ArrowRigth from '../assets/about/ArrowRigth.png'
import Magic from '../assets/about/Magic.png'
import AboutForm from './AboutForm';
import { ContadorAbout } from '../Components/Styled';

export default function About(){

    return(
        <ContadorAbout>

            
            <div className="col1">

                <div className="arrow frist"/>

                

                    <div className="arrow">

                        <div className="Pe">
                             <div className="left">
                                 <img src={ArrowLeft} alt="arrow Left"/>
                             </div>

                             <div className="rigth">
                                  <img src={ArrowRigth} alt="arrow Rigth"/>
                              </div>
                        </div>
                    </div>

                    <div className="arrow">
                        
             </div>

              

            </div>

            
            
            <div className="Col2">
                <div className="NFT">
                    <img src={NTF} alt="nfc"/>
                </div>

                <div className="magic">
                    <img src={Magic} alt="magic"/>
                </div>
            </div>

            <div className="Line"/>

           <AboutForm/>
            
          
        </ContadorAbout>
    )
}