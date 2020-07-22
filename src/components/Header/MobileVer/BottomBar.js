import React from "react";
import Nav from "../Nav";
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