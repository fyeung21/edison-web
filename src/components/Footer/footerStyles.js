import styled from "styled-components";
import { theme } from "../Theme";

export const FooterCont = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    position: sticky;
    bottom: 2.5rem;
`
export const FooterTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    letter-spacing: 0.15rem;
    margin: 0 5px 0 0;
`
export const LinkedInLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    letter-spacing: 0.15rem;
    :hover {
        color: ${({ theme }) => theme.mainTxtColor};
    }
`