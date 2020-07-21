import styled from "styled-components";
import { theme } from "../Theme";

export const WorkCont = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto 8rem;
`

///////////////  Tall/Wide Cont

export const TallCont = styled.div`
    display: flex;
    width: 425px;
    margin: 1.75rem auto;
    position: relative;

    @media (min-width: ${theme.tabletSize}) {
        height: 446px;
        width: 630px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 446px;
        width: 315px;
    }
`
export const WideCont = styled.div`
    display: flex;
    width: 425px;
    margin: 1.75rem auto;
    position: relative;
    @media (min-width: ${theme.tabletSize}) {
        height: 446px;
        width: 630px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 446px;
        width: 630px;
    }
`

/////////////  Img

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
`

/////////////  Hover Card

export const HoverCont = styled.div`
    display: none;

    @media (min-width: ${theme.desktopSize}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        z-index: 2;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 1.5rem;
        background-color: ${({ theme }) => theme.cardHoverColor};
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
        &:hover {
            opacity: 1;
        }   
    }
`
export const CardTitle = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    margin: 0.5rem 0 1rem;
`
export const CardDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0.5rem 0;
    line-height: 22px;
`
///////////// Container for Mobile/Tablet version

export const MobileVer = styled.div`
    margin: 1rem 0;
    @media (min-width: ${theme.desktopSize}) {
        display:none;
    }
`