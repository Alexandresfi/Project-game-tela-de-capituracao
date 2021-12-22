import React from "react";
import {
    ButtonForm,
    ContainerLineForm,
    LineForm,
    PSmall
} from '../AboutUs/styles'
import {
    AreaFormContact,
    FormContact,
    H1Contact,
    InputContact
} from "./styles";

export default function ContactForm() {
    return (
        <AreaFormContact>

            <ContainerLineForm>
                <LineForm />
                <p>Coming Soon</p>
            </ContainerLineForm>

            <H1Contact>
                Write to us
            </H1Contact>

            <PSmall>
                Need help? Send us a message?
            </PSmall>

            <FormContact
                action="https://clashcardschampions.us5.list-manage.com/subscribe/post?u=6943f6e71bf8eb5b548f2b102&amp;id=74b53d7790"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate>

                <InputContact type="text" name="FMANE" placeholder="Name" />
                <InputContact type="email" name="EMAIL" placeholder="Email address" />
                <InputContact className="big" type="text" name="MESSAGE" placeholder="Message" />

                <ButtonForm type="submit">Submit</ButtonForm>
            </FormContact>

        </AreaFormContact>
    )
}
