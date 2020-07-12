import styled from "styled-components";
import { theme } from "../Theme";

export const HeaderMainCont = styled.div`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
        position: sticky;
        z-index: 20;
        top: 0;
        padding: 1rem 0;
        background-color: ${({ theme }) => theme.headerBkgColor};
    }
`
export const HeaderSubCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
`

////////////// Logo

export const LogoText = styled.h4`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`

export const linkStyle = {
    textDecoration: 'none'
}

//////////////  Nav

export const NavMainCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
    }
`
export const NavCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const IconCont = styled.div`
    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const NavTxt = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0 1.75rem;
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
    @media (min-width: ${theme.desktopSize}) {
        font-size: ${theme.bodyFontSize};
        margin: 0 1.5rem;
    }
`