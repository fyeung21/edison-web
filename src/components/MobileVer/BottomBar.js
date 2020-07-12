import React from 'react';
import Nav from '../Header/Nav';
import { BottomBarCont, BottomSubCont } from './mobileStyles';
import Toggle from '../ThemeToggle/Toggle';

const BottomBar = () => {
    return (
        <BottomBarCont>
            <BottomSubCont>
                <Nav />
                <Toggle />
            </BottomSubCont>
        </BottomBarCont>
    );
}

export default BottomBar;