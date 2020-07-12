import React from "react";
import { ThemeCont } from "./toggleStyles";
import { Moon } from "react-feather";

const Dark = () => {
    return (
        <ThemeCont>
            <Moon color={"#858585"} size={21} />
        </ThemeCont>
    );
};

export default Dark;