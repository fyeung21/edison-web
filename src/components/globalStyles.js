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
    width: 70%;
    margin: 0 auto;
`