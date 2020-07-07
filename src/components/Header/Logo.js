import React from 'react';
import { LogoText, linkStyle } from './headerStyles';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" style={linkStyle}>
            <LogoText>
                {`portfolio:/edison/design`}
            </LogoText>
        </Link>
    );
}

export default Logo;