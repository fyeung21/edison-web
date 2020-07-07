import styled from "styled-components";
import { theme } from "../Theme";

export const AboutCont = styled.div`
    width: 65%;
    margin: 0 auto 8rem;
`
export const AboutHeading = styled.h2`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`
export const AboutTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    text-indent: 50px;
    margin: 2rem auto;
    line-height: 2.5rem;
`