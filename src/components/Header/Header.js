import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { HeaderMainCont, HeaderSubCont } from "./headerStyles";

const Header = ({ children }) => {
    return (
        <HeaderMainCont>
            <HeaderSubCont>
                <Logo />
                <Nav>
                    {children}
                </Nav>
            </HeaderSubCont>
        </HeaderMainCont>
    );
}

export default Header;