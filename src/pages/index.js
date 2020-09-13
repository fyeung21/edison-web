import React from "react";
import { MainCont } from "../components/globalStyles";
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import ReturnTop from "../components/ReturnTop/ReturnTop";
import Head from "../components/Head/Head";

const Home = () => {
    return (
        <MainCont>
            <Head title={"Home"} />
            <ReturnTop />
            <Hero />
            <Skills />
        </MainCont>
    );
}

export default Home;