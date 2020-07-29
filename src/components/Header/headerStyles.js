import styled from "styled-components";
import { theme } from "../Theme";

export const HeaderMainCont = styled.div`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
        // position: sticky;
        z-index: 20;
        top: 0;
        padding: 2rem 0;
    }
`
export const HeaderSubCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: ${theme.tabletSize}) {
        width: 650px;
        margin: 0 auto;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 1000px;
    }
`

export const MenuCont = styled.div`
    display: flex;
    align-items: center;
`

////////////// Logo

export const LogoText = styled.h4`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`

//////////////  Nav

export const NavMainCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        margin: 0;
    }
`
export const NavCont = styled.div`
    margin: 0 1.5rem 0 0;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0;
    }
`
export const NavClickCont = styled.div`
    margin: 0 1.75rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0;
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