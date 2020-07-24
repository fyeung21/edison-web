import styled from "styled-components";

export const PhotoCont = styled.div`
    margin: 4rem auto;
`

///////////////// PositionCont

export const PositionCont = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 4rem 0;
`
//////////////// Portrait/Landscape Cont

export const PortraitCont = styled.div`
    width: 645px;
    height: 965px;
`

export const LandscapeCont = styled.div`
    width: 875px;
    // height: 585px;
`

//////////////// Img

export const PhotoImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.imgBrightness});
`