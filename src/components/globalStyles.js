import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

///////////////// Site Background Themeing

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`

///////////////// Overall Main Container

export const MainCont = styled.div`
    width: 325px;
    margin: 2.5rem auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`

//////////////// TopBottom Marginless Container for MobileHeader & Footer

export const Container = styled.div`
    width: 325px;
    margin: 0 auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`

//////////////// General Section Heading

export const SectionHeading = styled.h2`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};

    @media (min-width: ${theme.desktopSize}) {
      font-size: ${theme.h2FontSize};
    }
`
export const HeadingDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.activeTxtColor};
    margin: 1rem 0;
`

/////////////// JS Styling for Link to's

export const linkStyle = {
  color: "#727272",
  textDecoration: "none"
}

export const activeLinkStyle = {
  color: "#35AFF3",
  fontWeight: "400",
  textDecoration: "none"
}