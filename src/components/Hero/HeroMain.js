import React from "react";
import { HeroTxt, Flex, AccentTxt } from "./heroStyles";

const HeroMain = () => {
    return (
        <>
            <HeroTxt>Hello, I&#39;m Edison and</HeroTxt>
            <Flex>
                <HeroTxt>I am a</HeroTxt>
                <AccentTxt>Designer</AccentTxt>
            </Flex>
        </>
    );
}

export default HeroMain;