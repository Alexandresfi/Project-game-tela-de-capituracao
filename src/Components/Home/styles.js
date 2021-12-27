import styled from 'styled-components'
import MagicDays from '../../assets/MagicDays.png'

export const ContainerHome = styled.section`
    display: flex;
    justify-content: center;
    width: 66vw;
    margin: 10vmin 294px;
    position: relative;

    @media (max-width: 1027px){
        margin: 10vmin 147px;
        transition: margin, ease-out 0.2s;
    }

    @media (max-width: 806px){
        flex-direction: column;
        margin: auto;
        width: auto;
        width: auto;
    }
`

export const Container= styled.div`
    display: grid;
    
    .days{
        background-image: url(${MagicDays});
        width: 224px;
        height: 224px;
        color: #DCAE4D;
        grid-row: 3;
        margin-top: -112px;
    }

    .hours{
        background-color: rgba(248, 248, 248, 0.1);
    }

    .minutes{
        background-color: #FFFFFF;
        color: #DCAE4D;
        grid-row: 2;
    }

    .seconds{
        background-color: #DCAE4D;
        color: #FFFFFF;
        grid-row: 3;
    }

    @media (max-width: 806px){
        grid: 112px 112px 112px/ 112px 112px;
        justify-content: center;
        height: 224px;
        margin: 59px auto 9px auto;
        .days{
            margin: 0;
            width: 112px;
            height: 112px;
            grid-row: 1/2;
        }

        .seconds{
            grid-row: 2/2;
        }
    }
`

export const ContainerCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 112px;
    height: 112px;
    padding: 34px 35px;
`


export const PCounter = styled.p`
    width: 70px;
    height: 44px;

    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
`

export const SpanCounter = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
`

export const LineHome = styled.img`
    margin: auto 50px;
    opacity: 0.9;
    @media(max-width: 1071px){ 
		margin: auto 20px;
	}        
        
    @media(max-width: 806px){
        display: none;
    }
`