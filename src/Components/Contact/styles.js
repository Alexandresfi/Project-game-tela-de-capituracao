import styled from "styled-components"

export const AreaFormContact = styled.div`
    height: 390px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 806px){
        height: 370px;
    }
`

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 414px;
    height: 323px;
    background: transparent;

    .big{
        height: 124px;
        @media(max-width: 806px){
            height: 80px;
        }
    }

`

export const InputContact = styled.input`
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

    &:hover{
        border: 1px solid #DCAE4D;
        border-radius: 30px;
    }

    @media(max-width: 806px){
        width: 376px;
        margin: 0 auto;
    }

`

export const ButtonContact = styled.button`
    width: 148px;
    height: 44px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    padding: 13px 48px;

    color: #1E1A1B;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
        
`

export const H1Contact = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;

margin: 9px 0 17px 0;

color: #FFFFFF;

@media (max-width: 806px){
    margin-left: 10px;
}
`