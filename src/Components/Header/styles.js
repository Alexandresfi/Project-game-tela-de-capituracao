import styled, { css } from 'styled-components'

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

    &:hover{
        cursor: pointer;
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