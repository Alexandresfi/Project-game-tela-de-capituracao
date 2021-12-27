import styled, { css } from 'styled-components'

export const LinkFooter = styled.footer`
    text-align: center;
    
    @media (max-width: 806px){
        margin-top: -20px;
        ${(Position)=> 
            Position && css`
            height: 50px;
            margin: 2px 0 23px 0;
            `
        }
    }
`;

export const Circule = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 13px auto 42px auto;
    background-color: white;

    transition-property: all;
    transition-timing-function: ease-in;
    transition-duration: 0.5s;  

    &:hover{
        width: 8px;
        height: 8px;
    }

`

