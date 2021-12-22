import styled from 'styled-components'

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
