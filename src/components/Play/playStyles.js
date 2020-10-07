import styled from "styled-components";
import { theme } from "../Theme";

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
export const OverlayCont = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(15px);
    min-width: 100vw;
    min-height: 100vh;
`
export const ImgSmallCont = styled.div`
    width: 100%;
    padding: 0.25rem 0;

    @media (min-width: ${theme.tabletSize}) {
        width: 210px;
        height: 210px;
        cursor: pointer;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        width: 275px;
        height: 275px;
        padding: .35rem 0;
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
        border-radius: 10px;
    }
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