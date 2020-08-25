import React from "react";
import styled from "styled-components";

const IconColor = styled.div`
    color: ${({ theme }) => theme.mainTxtColor};
`

const ChevronUp = () => {
    return (
        <IconColor>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </IconColor>
    );
}

export default ChevronUp;