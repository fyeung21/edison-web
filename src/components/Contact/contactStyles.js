import styled from "styled-components";
import { theme } from "../Theme";

export const ContactCont = styled.div`
    width: 65%;
    margin: 4rem auto 30rem;
`
export const ContactHeading = styled.h2`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`
export const LinkCont = styled.div`
    margin: 3rem 0.15rem;
`
export const Email = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    text-decoration: none;
    margin: 2rem auto;
`