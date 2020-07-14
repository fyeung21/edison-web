import React from "react";
import { FooterCont, FooterTxt, ContactLink } from "./footerStyles";

const Footer = () => {
    return (
        <FooterCont>
            <FooterTxt>
                copyright &copy; 2020
            </FooterTxt>
            <ContactLink href="https://www.linkedin.com/in/koedison/">LinkedIn</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/koedison/">Email</ContactLink>
        </FooterCont>
    );
}

export default Footer;