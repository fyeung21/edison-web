import React from "react";
import { MainCont } from "../components/globalStyles";
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';

const Home = () => {
    return (
        <MainCont>
            <Hero />
            <Skills />
        </MainCont>
    );
}

export default Home;