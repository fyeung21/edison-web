import React from "react";
import Logo from "../Header/Logo";
import { Container } from "../globalStyles";
import { MobileHeadCont, MobileSubCont } from './mobileStyles';

const MobileHeader = () => {
    return (
        <Container>
            <MobileHeadCont>
                <MobileSubCont>
                    <Logo />
                </MobileSubCont>
            </MobileHeadCont>
        </Container>
    );
}

export default MobileHeader;