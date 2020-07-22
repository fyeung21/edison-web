import styled from "styled-components";
import { theme } from "../Theme";

export const FooterCont = styled.div`
    display: flex;
    margin: 0 0 2rem 1.5rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0 0 3rem 3.5rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        margin: 0 0 3rem 13.5rem;
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
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
`