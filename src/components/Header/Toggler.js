import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { Moon } from "react-feather";
import { Sun } from "react-feather";

const Button = styled.button`
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.body};
    cursor: pointer;
    overflow: hidden;
    position: relative;
    outline: none;
`

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}>
            {theme === "light" ? <Moon color={"#FFDA03"} size={18} /> : <Sun color={"#FFDA03"} size={18} />}
        </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;