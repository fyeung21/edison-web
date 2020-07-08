import React from "react";
import { func, string } from "prop-types";
import { ThemeBtn } from "./headerStyles";
import { Moon } from "react-feather";
import { Sun } from "react-feather";

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ThemeBtn onClick={toggleTheme}>
            {theme === "light" ?
                <Moon color={"#858585"} size={21} />
                :
                <Sun color={"#ABABAB"} size={21} />}
        </ThemeBtn>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;