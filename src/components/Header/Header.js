import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { HeaderMainCont, HeaderSubCont } from './headerStyles';

const Header = () => {
    return (
        <HeaderMainCont>
            <HeaderSubCont>
                <Logo />
                <Nav />
            </HeaderSubCont>
        </HeaderMainCont>
    );
}

export default Header;