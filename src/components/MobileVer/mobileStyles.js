import styled from "styled-components";
import { theme } from "../Theme";

export const MobileHeadCont = styled.div`
        display: block;
        position: sticky;
        z-index: 20;
        top: 0;
        padding: 1rem 0 0 2.5rem;

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
    display: flex;
    justify-content: center;

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const BottomSubCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
`
export const ToggleCont = styled.div`
    padding: 1rem 2.5rem;
`