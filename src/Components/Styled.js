import styled from 'styled-components'
import MagicDays from '../assets/MagicDays.png'


export const Menu = styled.header`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 90vw;
    margin: auto;
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

    @keyframes tamanho{
        0%{ width: 0;}
        25%{width: 14px;}
        50%{width: 30px;}
        75%{width: 47px;}
        100%{width: 62px;}
        
    }

    @keyframes tamanho1{
        0%{ width: 0;}
        25%{width: 14px;}
        50%{width: 30px;}
        75%{width: 47px;}
        100%{width: 56px;}
        
    }

        .subli{
            width: 62px;
            height: 2px;
            margin-right: auto;
            background: #DCAE4D;
            display: none;
            
        }

        .subli1{
            width: 56px;
            height: 2px;
            margin-right: auto;
            background: #DCAE4D;
            display: none;
            
        }


        ul{
            display: flex;
            flex-direction: row;
            list-style: none;
        }

            li{
                margin-right: 95.33px;
                
            }
        
            li:hover{
                cursor: pointer;
                
                .subli{
                    display: block;
                    animation: tamanho 1s;
                }

                .subli1{
                    display: block;
                    animation: tamanho1 2s;
                }
                
            }

        .teste{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

      
`;

export const Navigation = styled.nav`

    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    
    
    margin: 12vh 199px 194px 7vmax;

    /* @media(max-width: 1416px){
        margin-top: 20vh;
    } */


    @keyframes Text{
        from{ width: 0;}
        to{width: 175px;}
    }
    width: 175px;
    

            ul{
                color: #FFFFFF;
                display: flex;
                flex-direction: column;
                align-items: center;
                list-style: none;
            }

                li{
                    margin-right: auto;
                    margin-bottom: 37px;                   

                    img{margin-right:10px;}

                    .anima{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-right: auto;
                        height: 24px;
                        list-style: none;

                        /* transition-property:width;
                        transition-timing-function: ease-out;
                        transition-duration: 5s */
                    }

                    p{
                        display: none;
                        margin-right: auto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 15px;
                        
                    }

                }


                  

                li:hover{
                    
                    .anima{
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 30px;
                    padding: 4px 8px;
                    animation: Text 0.5s ease-in-out;}
                  p{
                      display: block;
                  }
                }
            

`;

export const Contador = styled.div`

    /* display: grid;
    grid-template: auto auto auto/ auto auto; */
    

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 66vw;
    margin: 10vmin 294px;
    

    .coluna1, .coluna2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }


    .time{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 112px;
        height: 112px;
        padding: 34px 35px;

    }

        .hours{
            
            background-color: rgba(248, 248, 248, 0.1);

            p{
                width: 41px;
                height: 44px;

                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                text-align: center;

                span{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                }
            }
        }

        .minutes{
            background-color: #FFFFFF;
            color: #DCAE4D;
            p{
                width: 59px;
                height: 44px;

                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                text-align: center;

                span{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                }
            }
        }

        .seconds{
            background-color: #DCAE4D;
            color: #FFFFFF;

            p{
                width: 58px;
                height: 44px;

                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                text-align: center;

                span{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                }
            }
        }

        .days{
            background-image: url(${MagicDays});
            width: 224px;
            height: 224px;
            color: #DCAE4D;
            

            p{
                width: 91px;
                height: 91px;
                font-style: normal;
                font-weight: 600;
                font-size: 72px;
                line-height: 88px;
                text-align: center;

                span{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                }
            }
        }

        .images{
            width: 224px;
            height: 112px;
            
        }

        .Line{
            margin: auto 50px;
            opacity: 0.9;
        }

       

`;

export const ContadorAbout = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 66vw;
    margin: 10vmin 294px;

    .col1, .col2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .arrow{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 112px;
        height: 112px;
        padding: 34px 35px;
        background-color: transparent;
    }

   

    .Pe{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;

        background-color: white;
        margin-left: auto;
        margin-top: -62px;
    }

    .left , .rigth{
        background: #DCAE4D;
        width: 38px;
        height: 53px;
        img{
            margin: 20px 15px;
        }
    }

    .magic{
        width: 224px;
        height: 224px;
        margin-top: 106px;
    }

    .Line{
            
            margin: auto 50px;
            opacity: 0.9;
        }

        .NFT{
            transform: translateY(-28px) translateX(120px);
            display: none;
        }

`;

export const ContadorContact = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 66vw;
    margin: 0vmin 294px;
    

    .col1, .col2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .arrow{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 112px;
        height: 112px;
        padding: 34px 35px;
        background-color: transparent;
    }

   

    .Pe{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;

        background-color: white;
        margin-left: auto;
        margin-top: -62px;
    }

    .left , .rigth{
        background: #DCAE4D;
        width: 38px;
        height: 53px;
        img{
            margin: 20px 15px;
        }
    }

    .magic{
        width: 224px;
        height: 224px;
        margin-top: 106px;
    }

    .Line{
            height: 501px;
            margin: auto 50px auto 50px;
            opacity: 0.9;
        }

        .NFT{
            transform: translateY(-28px) translateX(120px);
            display: none;
        }

`;

export const AreaForm = styled.div`

        height: 336px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .containerLine{
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 12px;
            line-height: 15px;
        }

        .LineForm{
            width: 27px;
            border: 1px solid #FFFFFF;
            margin: auto 10px;
        }

        form{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            width: 414px;
            height: 52px;

            border: 1px solid #FFFFFF;
            border-radius: 30px;
            padding: 4px;

            background: transparent;

            button{

                width: 148px;
                height: 44px;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                background-color: #FFFFFF;
                border: 1px solid #FFFFFF;
                border-radius: 30px;
                p{
                color: #1E1A1B;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                }
                .notification{
                    display: none;
                    width: 24px;
                    height: 24px;
                    
                }
            }

            button:hover{
                P{color: #DCAE4D;}
                
                background-repeat: no-repeat;
                background-size: 28px;
                background-position-x: 10px;
                background-position-y: center;

                .notification{
                    display: block;
                }
            }

            input{
                background: transparent;
                border: none;

                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;

                outline: none;
                color: rgba(255, 255, 255, 0.3);

                padding-left: 20px;
            }
        }

        h1{
            width: 331px;
            height: auto;
            font-size: 36px;
            line-height: 44px;
        }

        .pequeno{
            font-size: 12px;
            line-height: 15px;

            width: 413px;
            height: 30px;
        }

        .h3{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
        }

        ul{
            margin-left: 15px;
        }
`;

export const AreaFormContact = styled.div`
    height: 501px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .containerLine{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        line-height: 15px;
    }

    .LineForm{
        width: 27px;
        border: 1px solid #FFFFFF;
        margin: auto 10px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 414px;
        height: 323px;


        background: transparent;

        .SameThing{

            width: 414px;
            height: 42px;

            border: 0.3px solid #FFFFFF;
            border-radius: 30px;
            outline: none;

            background: transparent;

            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;

            outline: none;
            color: rgba(255, 255, 255, 0.3);

            padding-left: 20px;
        }

        .SameThing:hover{
            border: 1px solid #DCAE4D;
            border-radius: 30px;
        }

        .Big{
            height: 124px;
        }

        button{

            width: 148px;
            height: 44px;
            margin-right: auto;

            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            padding: 13px 48px;

            color: #1E1A1B;
            background: #FFFFFF;
            border: 1px solid #FFFFFF;
            border-radius: 30px;
        }

}

h1{
    width: 331px;
    height: auto;
    font-size: 36px;
    line-height: 44px;
}

.pequeno{
    font-size: 12px;
    line-height: 15px;

    width: 413px;
    height: 30px;
}



`;

export const Footer = styled.footer`

p{ text-align: center;}

.circule{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 13px auto 42px auto;
    background-color: white;

    transition-property: all;
    transition-timing-function: ease-in;
    transition-duration: 1s;  
}

.circule:hover{
    width: 8px;
    height: 8px;
}


`;

export const Balls = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    margin: 20vh 81px 20vh 0;



    .balls{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        margin-top: 16px;
    }

    .one{
        width: 16px;
        height: 16px;
        background-color: #DCAE4D;
    }

`;