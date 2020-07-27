import styled from "styled-components";
import { theme } from "../../Theme";

export const MobileHeadCont = styled.div`
        display: block;
        position: sticky;
        z-index: 20;
        top: 0;
        padding: 1rem 0;

    @media (min-width: ${theme.skinnyWindowSize}) {
        padding: 1rem 0 1rem 1rem;
    }
    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const MobileSubCont = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`

///////// Bottom Bar

export const BottomBarCont = styled.div`
    position: sticky;
    z-index: 20;
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.inactiveTxtColor};
    background-color: ${({ theme }) => theme.headerBkgColor};

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const BottomSubCont = styled.div`
    display: flex;
    flex-direction: row;
`
export const ToggleCont = styled.div`
    margin: 1rem;
`