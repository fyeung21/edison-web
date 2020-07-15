import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`
export const MenuCont = styled.div`
    display: flex;
    align-items: center;
`
export const MainCont = styled.div`
    width: 85%;
    margin: 1rem auto 0;
    @media (min-width: ${theme.tabletSize}) {
      max-width: 70%;
      margin: 1.5rem auto 0;
    }
    @media (min-width: ${theme.desktopSize}) {
      margin: 4rem auto 0;
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