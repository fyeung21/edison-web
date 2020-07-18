import React from "react";
import Nav from "../Header/Nav";
import { BottomBarCont, BottomSubCont, ToggleCont } from "./mobileStyles";

const BottomBar = ({ children }) => {
    return (
        <BottomBarCont>
            <BottomSubCont>
                <Nav />
                <ToggleCont>
                    {children}
                </ToggleCont>
            </BottomSubCont>
        </BottomBarCont>
    );
}

export default BottomBar;