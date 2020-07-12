import React from "react";
import { func, string } from "prop-types";
import { ThemeBtn } from "./toggleStyles";
import Dark from "./Dark";
import Light from "./Light";

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ThemeBtn onClick={toggleTheme}>
            {theme === "light" ? <Dark /> : <Light />}
        </ThemeBtn>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;