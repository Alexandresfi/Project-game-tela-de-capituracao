import React from 'react';
import Lane from '../../assets/Lane.png'
import { FormAbout } from './FormAbout';
import {
    ContainerAbout,
    Container,
    Line
} from './styles'
import { CarouselInitial } from './CarouselInitial';

export function About() {
    
    return (
        <Container>
            <ContainerAbout>
               <CarouselInitial/>
                <Line src={Lane} alt="linha" />
                <FormAbout />
            </ContainerAbout>
        </Container>
    )
}