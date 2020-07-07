import React from "react";
import { Link } from "react-router-dom";
import { ContactCont, ContactHeading, LinkCont, Email } from "./contactStyles";
import { linkStyle } from "../Header/headerStyles";

const ContactMe = () => {
    return (
        <ContactCont>
            <ContactHeading>Let&#39;s chat!</ContactHeading>
            <LinkCont>
                <Email
                    href="mailto:koedison@gmail.com?subject=Let's chat!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
            </Email>
            </LinkCont>
        </ContactCont>
    );
}

export default ContactMe;