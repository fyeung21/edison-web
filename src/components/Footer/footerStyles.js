import styled from "styled-components";
import { theme } from "../Theme";

export const FooterCont = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 0;

    @media (min-width: ${theme.tabletSize}) {
        margin: 3.5rem 0;
    }
`
export const FooterTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0 5px 0 0;
`
export const ContactLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0 0.25rem;
    cursor: pointer;
    
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
`