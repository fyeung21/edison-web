import React from "react";
import { ThemeCont } from "./toggleStyles";
import { Moon } from "react-feather";

const Dark = () => {
    return (
        <ThemeCont>
            <Moon color={"#BBBBBB"} size={21} />
        </ThemeCont>
    );
};

export default Dark;