import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { NavCont, NavTxt, NavIconCont } from "./headerStyles";
import Edit from "../Icons/Edit";
import MountSun from "../Icons/MountSun";
import UserIcon from "../Icons/UserIcon";


const Nav = ({ children }) => {
    return (
        <NavCont>
            <Link to="/work" style={linkStyle}>
                <NavIconCont>
                    <Edit />
                </NavIconCont>
                <NavTxt>work</NavTxt>
            </Link>

            <Link to="/photo" style={linkStyle}>
                <NavIconCont>
                    <MountSun />
                </NavIconCont>
                <NavTxt>photo</NavTxt>
            </Link>


            <Link to="/about" style={linkStyle}>
                <NavIconCont>
                    <UserIcon />
                </NavIconCont>
                <NavTxt>about</NavTxt>
            </Link>

            {children}

        </NavCont>
    );
}

export default Nav;