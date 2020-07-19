import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { NavMainCont, NavCont, NavClickCont, NavTxt, IconCont } from "./headerStyles";
import Edit from "../Icons/Edit";
import MountSun from "../Icons/MountSun";
import UserIcon from "../Icons/UserIcon";


const Nav = () => {
    return (
        <NavMainCont>
            <NavCont>
                <Link to="/work" style={linkStyle}>
                    <NavClickCont>
                        <IconCont>
                            <Edit />
                        </IconCont>
                        <NavTxt>work</NavTxt>
                    </NavClickCont>
                </Link>
            </NavCont>

            <NavCont>
                <Link to="/photo" style={linkStyle}>
                    <NavClickCont>
                        <IconCont>
                            <MountSun />
                        </IconCont>
                        <NavTxt>photo</NavTxt>
                    </NavClickCont>
                </Link>
            </NavCont>
            <NavCont>
                <Link to="/about" style={linkStyle}>
                    <NavClickCont>
                        <IconCont>
                            <UserIcon />
                        </IconCont>
                        <NavTxt>about</NavTxt>
                    </NavClickCont>
                </Link>
            </NavCont>

        </NavMainCont>
    );
}

export default Nav;