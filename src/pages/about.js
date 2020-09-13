import React from "react";
import { MainCont } from "../components/globalStyles";
import AboutMe from "../components/About/AboutMe";
import Head from "../components/Head/Head";

const About = () => {
    return (
        <MainCont>
            <Head title={"About"} />
            <AboutMe />
        </MainCont>
    );
}

export default About;