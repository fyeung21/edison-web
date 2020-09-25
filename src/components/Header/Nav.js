import React from "react";
import { NavLink } from "react-router-dom";
import { linkStyle, activeLinkStyle } from "../globalStyles";
import { NavCont, NavTxt, NavIconCont } from "./headerStyles";
import Edit from "../Icons/Edit";
// import MountSun from "../Icons/MountSun";
import UserIcon from "../Icons/UserIcon";


const Nav = ({ children }) => {
    return (
        <NavCont>
            {/* Work */}
            <NavIconCont>
                <NavLink strict to="/work" style={linkStyle} activeStyle={activeLinkStyle}>
                    <Edit />
                </NavLink>
            </NavIconCont>

            <NavTxt>
                <NavLink strict to="/work" style={linkStyle} activeStyle={activeLinkStyle}>
                    work
                </NavLink>
            </NavTxt>

            {/* Photography */}
            {/* <NavIconCont>
                <NavLink exact to="/photo" style={linkStyle} activeStyle={activeLinkStyle}>
                    <MountSun />
                </NavLink>
            </NavIconCont>

            <NavTxt>
                <NavLink exact to="/photo" style={linkStyle} activeStyle={activeLinkStyle}>
                    photo
                </NavLink>
            </NavTxt> */}

            {/* About */}
            <NavIconCont>
                <NavLink exact to="/about" style={linkStyle} activeStyle={activeLinkStyle}>
                    <UserIcon />
                </NavLink>
            </NavIconCont>

            <NavTxt>
                <NavLink exact to="/about" style={linkStyle} activeStyle={activeLinkStyle}>
                    about
            </NavLink>
            </NavTxt>

            {children}

        </NavCont>
    );
}

export default Nav;