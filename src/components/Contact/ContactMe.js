import React from "react";
import { Heading } from "../globalStyles";
import { ContactCont, LinkCont, BtnCont, ContactLink } from "./contactStyles";
import { Mail, Linkedin } from "react-feather";

const ContactMe = () => {
    return (
        <ContactCont>
            <Heading>Let&#39;s chat!</Heading>
            <LinkCont>
                <BtnCont>
                    <Mail color={"#41BAAE"} size={20} />
                    <ContactLink
                        href="mailto:koedison@gmail.com?subject=Let's chat!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email
                </ContactLink>
                </BtnCont>
                <BtnCont>
                    <Linkedin color={"#41BAAE"} size={20} />
                    <ContactLink
                        href="mailto:koedison@gmail.com?subject=Let's chat!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
            </ContactLink>
                </BtnCont>
            </LinkCont>
        </ContactCont>
    );
}

export default ContactMe;