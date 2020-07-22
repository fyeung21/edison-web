import React from "react";
import { Container } from "../globalStyles";
import { FooterCont, FooterTxt, ContactLink } from "./footerStyles";

const Footer = () => {
    return (
        <Container>
            <FooterCont>
                <FooterTxt>
                    copyright &copy; 2020
            </FooterTxt>
                <ContactLink href="https://www.linkedin.com/in/koedison/">LinkedIn</ContactLink>
                <ContactLink href="https://www.linkedin.com/in/koedison/">Email</ContactLink>
            </FooterCont>
        </Container>
    );
}

export default Footer;