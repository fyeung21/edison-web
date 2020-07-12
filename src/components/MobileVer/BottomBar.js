import React from 'react';
import Nav from '../Header/Nav';
import { BottomBarCont, BottomSubCont, ToggleCont } from './mobileStyles';
import Toggle from '../ThemeToggle/Toggle';

const BottomBar = () => {
    return (
        <BottomBarCont>
            <BottomSubCont>
                <Nav />
                <ToggleCont>
                    <Toggle />
                </ToggleCont>
            </BottomSubCont>
        </BottomBarCont>
    );
}

export default BottomBar;