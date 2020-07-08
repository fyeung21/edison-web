import React from "react";
import { HeroCont, FlexSubHero } from "./heroStyles";
import HeroSubTxt from "./HeroSubTxt";
import HeroMain from "./HeroMain";
import LinkToWork from "./LinkToWork";

const Hero = () => {
    return (
        <HeroCont>
            <HeroMain />
            <FlexSubHero>
                <HeroSubTxt />
                <LinkToWork />
            </FlexSubHero>
        </HeroCont>
    );
}

export default Hero;