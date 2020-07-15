import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { LinkCont, Txt, iconStyle } from "./heroStyles";
import { ChevronRight } from "react-feather";

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