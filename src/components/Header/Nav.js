import React from 'react';
import { Link } from 'react-router-dom';
import { NavMainCont, NavCont, NavTxt, IconCont, linkStyle } from './headerStyles';
import { Mail } from "react-feather";

const Nav = () => {
    return (
        <NavMainCont>

            <Link to="/work" style={linkStyle}>
                <NavCont>
                    <IconCont>
                        <Mail color={"#BBBBBB"} size={26} />
                    </IconCont>
                    <NavTxt>work</NavTxt>
                </NavCont>
            </Link>

            <Link to="/photo" style={linkStyle}>
                <NavCont>
                    <IconCont>
                        <Mail color={"#BBBBBB"} size={26} />
                    </IconCont>
                    <NavTxt>photo</NavTxt>
                </NavCont>
            </Link>

            <Link to="/about" style={linkStyle}>
                <NavCont>
                    <IconCont>
                        <Mail color={"#BBBBBB"} size={26} />
                    </IconCont>
                    <NavTxt>about</NavTxt>
                </NavCont>
            </Link>

        </NavMainCont>
    );
}

export default Nav;