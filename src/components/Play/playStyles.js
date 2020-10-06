import styled from "styled-components";
import { theme } from "../Theme";

export const DisplayFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const ImgSmallCont = styled.div`
    width: 155px;
    height: 155px;
    padding: 0.5rem 0;

    @media (min-width: ${theme.skinnyWindowSize}) {
        width: 175px;
        height: 175px;
    }
    @media (min-width: ${theme.tabletSize}) {
        width: 200px;
        height: 200px;
        padding: 1rem 0;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        width: 250px;
        height: 250px;
        padding: 1.5rem 0;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 300px;
        height: 300px;
        padding: 1.5rem 0;
    }
`
export const ImageThumb = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
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