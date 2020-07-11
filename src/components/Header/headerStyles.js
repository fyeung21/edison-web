import styled from "styled-components";
import { theme } from "../Theme";

export const HeaderMainCont = styled.div`
    position: sticky;
    z-index: 20;
    top: 0;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.headerBkgColor}
`
export const HeaderSubCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
`

//////////////  Logo and Nav

export const NavCont = styled.div`
    display: flex;
`
export const LogoText = styled.h4`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`
export const NavTxt = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0 1.5rem;
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
`
export const linkStyle = {
    textDecoration: 'none'
}

////////////////// Toggler

export const ThemeBtn = styled.button`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    outline: none;
    padding-right: 0;
`