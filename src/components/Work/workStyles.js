import styled from "styled-components";
import { theme } from "../Theme";


export const WorkCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem;

    @media (min-width: ${theme.skinnyWindowSize}) {
        margin: 0 0 2rem;
    }
    @media (min-width: ${theme.tabletSize}) {
        margin: 0 0 4rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 0 8rem
    }
`

///////////////  Tall/Wide Cont

export const TallCont = styled.div`
    display: flex;
    position: relative;
    height: 446px;

    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 546px;
    }
    @media (min-width: ${theme.tabletSize}) {
        height: 446px;
        width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        height: 500px;
        width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 448px;
        width: 317px;
        margin: 1.75rem auto;
    }
`
export const WideCont = styled.div`
    display: flex;
    position: relative;
    height: 446px;
    
    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 546px;
    }
    @media (min-width: ${theme.tabletSize}) {
        height: 446px;
        width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        height: 500px;
        width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 446px;
        width: 630px;
        margin: 1.75rem auto;
    }
`
export const FullCont = styled.div`
    display: flex;
    position: relative;
    height: 446px;

    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 546px;
    }
    @media (min-width: ${theme.tabletSize}) {
        height: 446px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        height: 500px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 448px;
        margin: 1.75rem auto;
    }
`

/////////////  Img

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.imgBrightness});
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
    font-size: ${theme.h4FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 400;
    margin: 0.5rem 0;

    @media (min-width: ${theme.tabletSize}) {
        font-weight: 500;
    }
`
export const CardDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0.5rem 0;
    line-height: 22px;
    display: none;

    @media (min-width: ${theme.desktopSize}) {
        display: block;
    }
`
///////////// Container for Mobile/Tablet version's Card Info

export const MobileVer = styled.div`
    margin: 1.5rem 0 5rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 2rem 0 6rem;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        margin: 1rem 0 4rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        display: none;
    }
`