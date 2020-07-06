import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { HeaderCont } from './headerStyles';

const Header = () => {
    return (
        <HeaderCont>
            <Logo />
            <Nav />
        </HeaderCont>
    );
}

export default Header;