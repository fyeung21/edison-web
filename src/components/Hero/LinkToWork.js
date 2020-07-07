import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { linkStyle } from "../Header/headerStyles";
import { LinkCont, Txt, iconStyle } from "./heroStyles";

const LinkToWork = () => {
    return (
        <Link to="/work" style={linkStyle}>
            <LinkCont>
                <Txt>work</Txt>
                <ChevronRight color={"#858585"} size={30} style={iconStyle} />
            </LinkCont>
        </Link>
    );
}

export default LinkToWork;