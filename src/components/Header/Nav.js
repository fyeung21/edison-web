import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { NavCont, NavTxt, IconCont } from "./headerStyles";
import Edit from "../Icons/Edit";
import MountSun from "../Icons/MountSun";
import UserIcon from "../Icons/UserIcon";


const Nav = ({ children }) => {
    return (
        <NavCont>
            <Link to="/work" style={linkStyle}>
                <IconCont>
                    <Edit />
                </IconCont>
                <NavTxt>work</NavTxt>
            </Link>

            <Link to="/photo" style={linkStyle}>
                <IconCont>
                    <MountSun />
                </IconCont>
                <NavTxt>photo</NavTxt>
            </Link>


            <Link to="/about" style={linkStyle}>
                <IconCont>
                    <UserIcon />
                </IconCont>
                <NavTxt>about</NavTxt>
            </Link>

            {children}

        </NavCont>
    );
}

export default Nav;