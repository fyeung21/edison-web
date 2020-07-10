import React from "react";
import { Heading } from "../globalStyles";
import { AboutCont, AboutTxt } from "./aboutStyles";

const AboutMe = () => {
    return (
        <AboutCont>
            <Heading>About Me</Heading>
            <AboutTxt>
                The limitless art universe has sparked a curiosity in me. I categorize myself as
                an art addict, if that is a thing. Exploring all types of art has always been my
                goal as art comes in different forms, mediums and approaches. I enjoy the process
                of turning a blank canvas into my own imaginative and creative playground. The outcome
                is highly rewarding and such satisfaction cannot be easily recreated. Throughout my
                years of studies, I have further developed my skills in pencil, acrylic painting,
                web-coding, UX/UI design, HCI design, and photography.
            </AboutTxt>
            <AboutTxt>
                In today’s modern society, important information can easily get unnoticed if
                presented incorrectly. Therefore, I have further developed my skill set in business
                marketing and sales to more effectively connect people. Modern, simplistic and minimalistic
                are currently my styles of focus. You can have a glimpse of my work throughout the site
                as it is fully designed by me.
            </AboutTxt>
            <AboutTxt>
                Even though my formal education has been completed, I have never stopped learning.
                Currently I am learning how to do basic code to better understand how to design with
                development in mind which would ensure a more efficient handover to developers. In
                terms of UX knowledge, I enjoy keeping myself updated on current trends by reading
                UX design blogs and books. “Don’t make me think” and the “Design of everyday things”
                are the current read of mine. The books mainly focus on how designers can help design
                more humanly and help communicate more efficiently. I am eager to learn and hopefully
                bring new creative ideas to the table!
            </AboutTxt>
            <AboutTxt>
                PS: If you know of any good books please recommend them to me!
            </AboutTxt>
        </AboutCont>
    );
}

export default AboutMe;