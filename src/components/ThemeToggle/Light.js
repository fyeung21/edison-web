import React from "react";
import { ThemeCont } from "./toggleStyles";
import { Sun } from "react-feather";

const Light = () => {
    return (
        <ThemeCont >
            <Sun color={"#BBBBBB"} size={21} />
        </ThemeCont>
    );
};

export default Light;