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
    @media (min-width: ${theme.smallLaptopSize}) {
        width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 1000px;
    }
`

////////////// Logo

export const LogoText = styled.h4`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`

//////////////  Nav

export const NavCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    width: 325px;

    @media (min-width: ${theme.skinnyWindowSize}) {
        width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
        margin: 0;
        width: 256px;
    }
`
export const NavIconCont = styled.div`
    color: ${({ theme }) => theme.inactiveTxtColor};
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
    :active {
        color: ${({ theme }) => theme.activeTxtColor};
    }

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const NavTxt = styled.p`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
        font-family: ${theme.bodyFont};
        font-size: ${theme.bodyFontSize};
        color: ${({ theme }) => theme.mainTxtColor};

        :hover {
            color: ${({ theme }) => theme.hoverTxtColor};
        }
        :active {
            color: ${({ theme }) => theme.activeTxtColor};
        }
    }
`