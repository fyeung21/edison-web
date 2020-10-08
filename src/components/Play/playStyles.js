import styled from "styled-components";
import { theme } from "../Theme";


/////////////  Page Containers

export const PlayCont = styled.div`
    margin: 4rem auto 8rem;

    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`
export const DisplayFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

////////////  Mobile vs Tablet show containers

export const MobileShow = styled.div`
    display: block;

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const TabletShow = styled.div`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
    }
`

///////////  Image Thumbnail related

export const ImgSmallCont = styled.div`
    width: 100%;
    padding: 0.25rem 0;
    position: relative;

    @media (min-width: ${theme.tabletSize}) {
        width: 210px;
        height: 210px;
        cursor: pointer;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        width: 275px;
        height: 275px;
        padding: 0.35rem 0;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 325px;
        height: 325px;
    }
`
export const ImageThumb = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: ${theme.tabletSize}) {
        border-radius: 5px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        border-radius: 10px;
    }
`
export const HoverMask = styled.div`
    display: none;

    @media (min-width: ${theme.skinnyWindowSize}) {
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
        background-color: ${({ theme }) => theme.maskHoverColor};
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
        &:hover {
            opacity: 1;
        }   
    }
`

///////////  Modal popup related

export const OverlayCont = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(15px);
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    z-index: 50;
`
export const ImgExpandCont = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
`
export const ImageExpand = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`