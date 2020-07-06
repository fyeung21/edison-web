import React from 'react';
import { Link } from 'react-router-dom';
import { NavCont, NavTxt, linkStyle } from './headerStyles';

const Nav = () => {
    return (
        <NavCont>
            <Link to="/" style={linkStyle}>
                <NavTxt>index</NavTxt>
            </Link>
            <Link to="/work" style={linkStyle}>
                <NavTxt>work</NavTxt>
            </Link>
            <Link to="/photo" style={linkStyle}>
                <NavTxt>photo</NavTxt>
            </Link>
            <Link to="/about" style={linkStyle}>
                <NavTxt>about</NavTxt>
            </Link>
            <Link to="/contact" style={linkStyle}>
                <NavTxt>contact</NavTxt>
            </Link>
        </NavCont>
    );
}

export default Nav;