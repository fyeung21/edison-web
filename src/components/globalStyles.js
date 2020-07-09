import styled, { createGlobalStyle } from "styled-components";

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
    max-width: 70%;
    margin: 4rem auto 0;
`