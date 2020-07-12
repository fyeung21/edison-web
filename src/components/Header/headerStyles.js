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
    padding: 1rem 0;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        padding: 0;
    }
`
export const NavCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.5rem;

    @media (min-width: ${theme.tabletSize}) {
        padding: 0;
    }
`
export const IconCont = styled.div`
    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const NavTxt = styled.h3`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
        font-family: ${theme.bodyFont};
        font-size: ${theme.bodyFontSize};
        color: ${({ theme }) => theme.mainTxtColor};
        margin: 0 1.5rem;

        :hover {
            color: ${({ theme }) => theme.hoverTxtColor};
        }
    }
`