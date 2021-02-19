import styled from "styled-components";
import { theme } from "../Theme";

export const HeroCont = styled.div`
    margin: 7rem auto 0rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 10rem auto 0rem;
    }
`


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

export const Header = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    font-weight: 400;
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 50px;
    width: 340px;

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h1FontSize};
        line-height: 70px;
        width: 550px;
    }
`