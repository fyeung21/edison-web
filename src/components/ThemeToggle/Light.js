import React from "react";
import { ThemeCont, ToggleTxt } from "./toggleStyles";
import { Sun } from "react-feather";

const Light = () => {
    return (
        <ThemeCont >
            <Sun color={"#858585"} size={21} />
            <ToggleTxt>light</ToggleTxt>
        </ThemeCont>
    );
};

export default Light;