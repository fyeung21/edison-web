import React from "react";
import { MainCont } from "../components/globalStyles";
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import ReturnTop from "../components/ReturnTop/ReturnTop";

const Home = () => {
    return (
        <MainCont>
            <ReturnTop />
            <Hero />
            <Skills />
        </MainCont>
    );
}

export default Home;