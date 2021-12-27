import styled, { css } from "styled-components"

export const Container = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 10vmin 294px;

    @media(max-width: 806px){
        margin: 0;
        justify-content: start;
    }
`
export const ContainerAbout = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 60vw;
    @media(max-width: 806px){
        flex-direction: column;
    }
`

export const ImagNFT = styled.div`
   transform: translateY(-28px) translateX(130px);
   margin: 0px 0 -75px 1vw;

   ${ ({Position})=>
       Position && css`
       margin: 0px 0 -40px 1vw;
       `
    }

    @media(max-width: 806px){
        display: none;
    }
`

export const ContainerCarousel = styled.div`
    display: flex;
    justify-content: center;
    background-color: transparent;
    @media(max-width: 806px){
       margin: 34px auto 17px auto;
    }
`

export const Line = styled.img`
    margin: 0 2vw;
    opacity: 0.9;
    @media(max-width: 806px){
        display: none;
    }
`

export const ArrowCarousel = styled.div`
    display: flex;
    background: #DCAE4D;

    width: 80px;
    height: 53px;

    img{
        margin: 20px 15px;
    }

    @media(max-width: 806px){
        margin-left: 150px;
    }
`

// FormAbout

export const AreaForm = styled.div`
    height: 336px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul{
        margin-left: 15px;
    }

    @media (max-width: 806px){

        justify-content: start;

        ul{
            margin-top: 30px;
            margin-left: 25px;
        }
    }

`

export const ContainerLineForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    line-height: 15px;

    @media(max-width: 806px){
        
    }

`

export const H1Container = styled.h1`
    width: 331px;
    height: auto;
    font-size: 36px;
    line-height: 44px;

    @media (max-width: 806px){
        margin: 9px 9px;
    }
`

export const PSmall = styled.p`
    font-size: 12px;
    line-height: 15px;

    width: 413px;
    height: 30px;

    @media (max-width: 806px){
        margin: 0 0 0 9px;
        width: 400px;
    }
`

export const H3Form = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    @media(max-width: 806px){
        margin-left: 9px;
        width: 299px;
    }
`

export const LineForm = styled.div`
    width: 27px;
    border: 1px solid #FFFFFF;
    margin: auto 10px;
`

export const Form = styled.form`
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

    @media (max-width: 806px){
        width: 327px;
        margin: 23px 44px;
    }

`

export const InputForm = styled.input`
    background: transparent;
    border: none;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    outline: none;
    color: rgba(255, 255, 255, 0.3);

    padding-left: 20px;

    @media (max-width: 806px){
        width: 327px;
    }
`

export const ButtonForm = styled.button`
    width: 148px;
    height: 44px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    @media (max-width: 806px){
        margin-left: 20px;
        width: 193px;
    }

    p{
        color: #1E1A1B;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
    }

    &:hover{
        P{color: #DCAE4D;}
                
        background-repeat: no-repeat;
        background-size: 28px;
        background-position-x: 10px;
        background-position-y: center;

        div{
            display: block;
        }
    }

    div{
        display: none;
        width: 24px;
        height: 24px;
    }

`

