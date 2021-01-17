import React from "react";
import { MainCont } from "../components/globalStyles";
import Head from "../components/Head/Head";
import AboutMe from "../components/About/AboutMe";
import Skills from "../components/Skills/Skills";

const About = () => {
    return (
        <MainCont>
            <Head title={"About"} />
            <AboutMe />
            {/* <Skills /> */}
        </MainCont>
    );
}

export default About;