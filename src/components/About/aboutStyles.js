import styled from "styled-components";
import { theme } from "../Theme";

export const QuoteCont = styled.div`
    margin: 4rem auto;

    // @media (min-width: ${theme.smallLaptopSize}) {
    //     margin: 4rem auto;
    // }
`
export const Quote = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.activeTxtColor};
    line-height: 2rem;
`
export const QuoteAuthor = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.activeTxtColor};
    line-height: 2rem;
`
export const AboutTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 2rem;
    margin: 2rem auto;
`