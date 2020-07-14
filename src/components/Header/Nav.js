import React from 'react';
import { Link } from 'react-router-dom';
import { NavMainCont, NavCont, NavTxt, IconCont, linkStyle } from './headerStyles';
import Edit from "../Icons/Edit";
import MountSun from '../Icons/MountSun';
import UserIcon from "../Icons/UserIcon";


const Nav = () => {
    return (
        <NavMainCont>

            <Link to="/work" style={linkStyle}>
                <NavCont>
                    <IconCont>
                        <Edit />
                    </IconCont>
                    <NavTxt>work</NavTxt>
                </NavCont>
            </Link>

            <Link to="/photo" style={linkStyle}>
                <NavCont>
                    <IconCont>
                        <MountSun />
                    </IconCont>
                    <NavTxt>photo</NavTxt>
                </NavCont>
            </Link>

            <Link to="/about" style={linkStyle}>
                <NavCont>
                    <IconCont>
                        <UserIcon />
                    </IconCont>
                    <NavTxt>about</NavTxt>
                </NavCont>
            </Link>

        </NavMainCont>
    );
}

export default Nav;