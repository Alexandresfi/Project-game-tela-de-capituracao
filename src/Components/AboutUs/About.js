import React, { useState } from 'react';
import NTF from '../../assets/about/NFT.png'
import ArrowLeft from '../../assets/about/ArrowLetf.png'
import ArrowRigth from '../../assets/about/ArrowRigth.png'
import Magic from '../../assets/about/Magic.png'
import Monster from '../../assets/Moster.png'
import Lane from '../../assets/Lane.png'
import AboutForm from './AboutForm';
import { ContadorAbout } from '../Styled';

export default function About(){

    const poster = [Magic, Monster];
    const [n, setN] = useState(0)

    function images() {
        if(n ===0){
            setN(1)
        }else if(n===1){
            setN(0)
        }
    }

    return(
        <ContadorAbout>

            
            <div className="col1">

                <div className="arrow frist"/>

                

                    <div className="arrow">

                        <div className="Pe">

                             <div className="left" onClick={images}>
                                 <img src={ArrowLeft} alt="arrow Left"/>
                             </div>

                             <div className="rigth" onClick={images}>
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
                    <img src={poster[n]} alt="magic"/>
                </div>
            </div>

                <img src={Lane} alt="linha" className="Line" />

           <AboutForm/>
            
          
        </ContadorAbout>
    )
}