import React from "react";
import { MainCont } from "../components/globalStyles";
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import BackTop from "../components/BackTop/BackTop";

const Home = () => {
    return (
        <MainCont>
            <BackTop />
            <Hero />
            <Skills />
        </MainCont>
    );
}

export default Home;