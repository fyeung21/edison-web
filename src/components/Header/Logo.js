import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { LogoText } from "./headerStyles";

const Logo = () => {
    return (
        <Link to="/" style={linkStyle}>
            <LogoText>
                {`edison.`}
            </LogoText>
        </Link>
    );
}

export default Logo;