import React from "react";
import { HeroSubCont, Txt1, Txt2, Txt3, Dot } from "./heroStyles";

const HeroSubTxt = () => {
    return (
        <HeroSubCont>
            <Txt1>product</Txt1>
            <Dot />
            <Txt2>visual</Txt2>
            <Dot />
            <Txt3>experience</Txt3>
        </HeroSubCont>
    );
}

export default HeroSubTxt;