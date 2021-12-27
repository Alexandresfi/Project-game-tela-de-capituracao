import styled from "styled-components"

export const ContainerNav = styled.nav`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;

    margin: 12vh 199px 194px 7vmax;
    width: 175px;
    @media (max-width: 1027px){
        display: none;
}
` 

export const UlNav = styled.ul`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;

    li{
        margin-right: auto;
        margin-bottom: 37px;
    }
`

export const LinkAnimation = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    height: 24px;
    list-style: none;

    img{
        margin-right:10px;
    }

    @keyframes Text{
        from{ width: 0;}
        to{width: 175px;}
    }

    &:hover{
        background: rgba(255, 255, 255, 0.3);
        border-radius: 30px;
        padding: 4px 8px;
        animation: Text 0.5s ease-in-out;
        p{
            display: block;
        }
    }

`

export const PNav = styled.p`
    display: none;
    margin-right: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;

`