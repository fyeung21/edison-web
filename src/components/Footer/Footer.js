import React from "react";
import { Container } from "../globalStyles";
import { FooterCont, FooterTxt, ContactLink } from "./footerStyles";

const Footer = () => {
    return (
        <Container>
            <FooterCont>
                <FooterTxt> copyright &copy; 2020 </FooterTxt>
                <ContactLink
                    href="https://www.linkedin.com/in/koedison/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </ContactLink>
                <ContactLink
                    href="mailto:koedison@gmail.com?subject=Let's grab a coffee!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </ContactLink>
            </FooterCont>
        </Container>
    );
}

export default Footer;