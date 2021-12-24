import styled from "styled-components"

export const VideoBack = styled.video`
    position: absolute;
    left: 50%;
    top: 50%;

    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -100;
    filter: opacity(20%); 
`