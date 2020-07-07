import React from "react";
import { HeroCont } from "./heroStyles";
import HeroSubTxt from "./HeroSubTxt";
import HeroMain from "./HeroMain";
import LinkToWork from "./LinkToWork";

const Hero = () => {
    return (
        <HeroCont>
            <HeroMain />
            <HeroSubTxt />
            <LinkToWork />
        </HeroCont>
    );
}

export default Hero;