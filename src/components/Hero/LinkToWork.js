import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { LinkCont, Txt } from "./heroStyles";
import ChevronRight from "../Icons/ChevronRight";

const LinkToWork = () => {
    return (
        <Link to="/" style={linkStyle}>
            <LinkCont>
                <Txt>work</Txt>
                <ChevronRight />
            </LinkCont>
        </Link>
    );
}

export default LinkToWork;