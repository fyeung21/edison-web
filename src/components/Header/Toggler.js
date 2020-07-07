import React from "react";
import { func, string } from "prop-types";
import { ThemeBtn } from "./headerStyles";
import { Moon } from "react-feather";
import { Sun } from "react-feather";

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ThemeBtn onClick={toggleTheme}>
            {theme === "light" ?
                <Moon color={"#FFDA03"} size={18} />
                :
                <Sun color={"#FFDA03"} size={18} />}
        </ThemeBtn>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;