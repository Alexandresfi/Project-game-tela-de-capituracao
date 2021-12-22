import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 10vmin 294px;
`
export const ContainerAbout = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 60vw;
`

export const ImagNFT = styled.div`
   transform: translateY(-28px) translateX(120px);
   margin: 10px 0 0 6vw;
`

export const ContainerCarousel = styled.div`
    display: flex;
    justify-content: center;
    background-color: transparent;
`

export const Line = styled.img`
    margin: 0 2vw;
    opacity: 0.9;
`

export const ArrowCarousel = styled.div`
    display: flex;
    background: #DCAE4D;

    width: 80px;
    height: 53px;

    img{
        margin: 20px 15px;
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
`

export const ContainerLineForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
`

export const H1Container = styled.h1`
    width: 331px;
    height: auto;
    font-size: 36px;
    line-height: 44px;
`

export const PSmall = styled.p`
    font-size: 12px;
    line-height: 15px;

    width: 413px;
    height: 30px;
`

export const H3Form = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
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

