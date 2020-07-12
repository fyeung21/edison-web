import React from "react";
import { ThemeCont, ToggleTxt } from "./toggleStyles";
import { Moon } from "react-feather";

const Dark = () => {
    return (
        <ThemeCont>
            <Moon color={"#858585"} size={21} />
            <ToggleTxt>dark</ToggleTxt>
        </ThemeCont>
    );
};

export default Dark;