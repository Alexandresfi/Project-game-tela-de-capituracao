import styled, { css } from 'styled-components'
import Logo from '../../assets/Logo.svg'

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
    background: transparent;

    @media(max-width: 806px){
        display: block;
        width: 100vw;
        margin:0;
        position: relative;
        z-index: 100;
        ${(props)=> 
            props.menu && css`
            background-color: rgba(30, 26, 27, 1);
            opacity: 1;
            `
        }
    }

`
export const ContainerNavMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const Menumobile = styled.div`
    height: 1vh;
    background-color: rgba(30, 26, 27, 1);
    padding-left: 10px;
    opacity: 0.9;
    position: absolute;
    right: 100vw;
    transition: ease .2s;
    ${(props)=> 
        props.Menu && css`
        left: 0vw;
        width: 100vw;
        height: 89.5vh;
        `
    }

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: 250px;
    background-position-y: 280px;
    background-size: 50vh;

`

export const ButtonMobile = styled.div`
display: none;

@media(max-width: 806px){
    display: block;
    width: 47px;
    border-top: 4px solid;
    transition: .3s;
    color: transparent;

    &::after{
        content: '';
        display: block;
        width: 47px;
        height: 4px;
        margin-top: 5px;
        background-color: #FFFF;
        ${(props)=> 
            props.menu && css`
            transform: rotate(-135deg);
            position: relative;
            top: -7px;
            `
        }
    }

    &::before{
        content: '';
        display: block;
        width: 47px;
        height: 4px;
        margin-top: 5px;
        background-color: #FFFF;

        ${(props)=> 
            props.menu && css`
            transform: rotate(135deg);;
            `
        }
    }

}
`

export const LiMobile = styled.li`
    display: flex;
    flex-direction: column;
`
export const SpanTitle = styled.span`
    height: 15px;
    margin-top: 10px;
    font-size: 12px;
    line-height: 15px;
`

export const SpanContent = styled.span`
height: 44px;

font-weight: bold;
font-size: 36px;
line-height: 44px;

background: -webkit-linear-gradient(left, rgba(244, 44, 44, 0.526) 0%, rgba(220, 174, 77, 1) 100%);
background: -webkit-linear-gradient(to right, rgba(220, 174, 77, 1) 0%, rgba(30, 26, 27, 1) 100%);

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
export const ContainerImg = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-evenly;

`

export const UlHeader = styled.ul`
    display: flex;
    list-style: none;
`

export const LiHeader = styled.li`
    margin-right: 95.33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 806px){
        display: none;
    }
`

export const LineAbout = styled.div`
    width: 62px;
    height: 2px;
    margin-right: auto;
    background: #DCAE4D;
    display: none; 

    @keyframes width1{
        0%{ width: 0;}
        25%{width: 14px;}
        50%{width: 30px;}
        75%{width: 47px;}
        100%{width: 62px;}
        
    }

    ${ ({houver})=>
        houver && 
        css` 
        display: block; 
        animation: width1 1s;
        ` 
    }
`

export const LineContact = styled.div`
    width: 56px;
    height: 2px;
    margin-right: auto;
    background: #DCAE4D;
    display: none;

    @keyframes width2{
        0%{ width: 0;}
        25%{width: 14px;}
        50%{width: 30px;}
        75%{width: 47px;}
        100%{width: 56px;}    
    }

    ${ ({houver})=>
        houver && 
        css` 
        display: block; 
        animation: width2 1s;
        ` 
    }
`