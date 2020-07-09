import styled from "styled-components";
import { theme } from "../Theme";

export const ContactCont = styled.div`
    margin: 4rem auto 22rem;
`
export const ContactHeading = styled.h2`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`
export const LinkCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10rem auto;
`
export const ContactLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    text-decoration: none;
    margin: 0 0.5rem;
`
export const BtnCont = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem;
    // border: 2px solid ${({ theme }) => theme.accentTxtColor};
    // border-radius: 5px;
    // padding: 1rem 3rem;
`