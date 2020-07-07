import React from "react";
import { HeroCont } from "./heroStyles";
import HeroSubTxt from "./HeroSubTxt";
import HeroMain from "./HeroMain";

const Hero = () => {
    return (
        <HeroCont>
            <HeroMain />
            <HeroSubTxt />
        </HeroCont>
    );
}

export default Hero;