import React from "react";
import { BottomBarCont } from "./mobileStyles";
import Nav from "../Nav";

const BottomBar = ({ children }) => {
    return (
        <BottomBarCont>
            <Nav>
                {children}
            </Nav>
        </BottomBarCont>
    );
}

export default BottomBar;