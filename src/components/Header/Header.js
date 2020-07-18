import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { HeaderMainCont, HeaderSubCont, MenuCont } from "./headerStyles";

const Header = ({ children }) => {
    return (
        <HeaderMainCont>
            <HeaderSubCont>
                <Logo />
                <MenuCont>
                    <Nav />
                    {children}
                </MenuCont>
            </HeaderSubCont>
        </HeaderMainCont>
    );
}

export default Header;