import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`
export const MainCont = styled.div`
    width: 325px;
    margin: 2.5rem auto 0;

    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`
export const Heading = styled.h2`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h5FontSize};
    color: ${({ theme }) => theme.mainTxtColor};

    @media (min-width: ${theme.desktopSize}) {
      font-size: ${theme.h2FontSize};
    }
`
export const linkStyle = {
  textDecoration: 'none'
}