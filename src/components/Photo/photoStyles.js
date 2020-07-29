import styled from "styled-components";
import { theme } from "../Theme";

///////////////// Main Container for photo.js

export const PhotoCont = styled.div`
    margin: 2.5rem auto;

    @media (min-width: ${theme.tabletSize}) {
        width: 650px;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 1000px;
    }
`

///////////////// PositionCont to get images to hug right

export const PositionCont = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0 0 10rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        margin: 0 0 15rem;
    }
`
//////////////// Portrait/Landscape Cont

export const PortraitCont = styled.div`

    @media (min-width: ${theme.tabletSize}) {
        width: 645px;
        height: 965px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 965px;
    }
`

export const LandscapeCont = styled.div`

    @media (min-width: ${theme.tabletSize}) {
        width: 875px;
    }
`

//////////////// Img

export const PhotoImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    filter: brightness(${({ theme }) => theme.imgBrightness});
`