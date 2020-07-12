import React from 'react';
import Logo from '../Header/Logo';
import { MobileHeadCont, MobileSubCont } from './mobileStyles';

const MobileHeader = () => {
    return (
        <MobileHeadCont>
            <MobileSubCont>
                <Logo />
            </MobileSubCont>
        </MobileHeadCont>
    );
}

export default MobileHeader;