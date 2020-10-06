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
`
export const ImageExpand = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const ImgExpandCont = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 500px;
    padding: 3.5rem 0 7rem;

    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 600px;
        padding: 2.5rem 0 5rem;
    }
    @media (min-width: ${theme.tabletSize}) {
        width: 800px;
        height: 650px;
        padding: 13rem 0;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        padding: 3.75rem 0;
    }
    @media (min-width: ${theme.desktopSize}) {
        padding: 5rem 0;
    }
`
export const OverlayCont = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    z-index: 10;
`