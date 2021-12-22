import React from 'react';
import ContactForm from './ContactForm';
import Lane from '../../assets/Lane.png'
import { CarouselInitial } from '../AboutUs/CarouselInitial';
import { Container, ContainerAbout, Line } from '../AboutUs/styles';



export function Contact() {
    return (
        <Container>
            <ContainerAbout>
                <CarouselInitial />
                <Line src={Lane} alt='linha horizontal' />
                <ContactForm />
            </ContainerAbout>
        </Container>
    )
}