import styled from 'styled-components'
import MagicDays from '../../assets/MagicDays.png'

export const ContainerHome = styled.section`
    display: flex;
    justify-content: center;
    width: 66vw;
    margin: 10vmin 294px;
`

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .days{
        background-image: url(${MagicDays});
        width: 224px;
        height: 224px;
        color: #DCAE4D;
    }

    .hours{
        background-color: rgba(248, 248, 248, 0.1);
    }

    .minutes{
        background-color: #FFFFFF;
        color: #DCAE4D;
    }

    .seconds{
        background-color: #DCAE4D;
        color: #FFFFFF;
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
export const NoImg = styled.div`
    width: 224px;
    height: 112px; 
`

export const LineHome = styled.img`
    margin: auto 50px;
    opacity: 0.9;
`