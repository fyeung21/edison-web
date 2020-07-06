import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    return (
        <div style={{ display: "flex" }}>
            <Logo />
            <Nav />
        </div>
    );
}

export default Header;