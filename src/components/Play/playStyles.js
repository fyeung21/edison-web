import styled from "styled-components";
import { theme } from "../Theme";

export const PlayCont = styled.div`
    margin: 0 auto;

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
export const ImgSmallCont = styled.div`
    width: 100%;
    padding: 1rem 0;

    @media (min-width: ${theme.tabletSize}) {
        width: 200px;
        height: 200px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        width: 250px;
        height: 250px;
        padding: 1.5rem 0;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 300px;
        height: 300px;
    }
`
export const ImageThumb = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: ${theme.tabletSize}) {
        border-radius: 20px;
    }
`
export const ImageExpand = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const ImgExpandCont = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
`
export const OverlayCont = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    min-width: 100vw;
    min-height: 100vh;
    z-index: 10;
`