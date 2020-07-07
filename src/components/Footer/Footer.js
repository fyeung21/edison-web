import React from "react";
import { FooterCont, FooterTxt, LinkedInLink } from "./footerStyles";

const Footer = () => {
    return (
        <FooterCont>
            <FooterTxt>
                copyright &copy; 2020 all rights reserved.
            </FooterTxt>
            <LinkedInLink href="https://www.linkedin.com/in/koedison/">LinkedIn</LinkedInLink>
        </FooterCont>
    );
}

export default Footer;