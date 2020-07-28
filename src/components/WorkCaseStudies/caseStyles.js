import styled from "styled-components";
import { theme } from "../Theme";

export const CaseStudyCont = styled.div`
    margin: 0 0 5rem;
`

///////////// Banner

export const BannerCont = styled.div`
    height: 400px;

    @media (min-width: ${theme.tabletSize}) {
        height: 700px;
    }
`
export const BannerImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.imgBrightness});
`

///////////// Stats

export const StatsMainCont = styled.div`
    width: 325px;
    margin: 4rem auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
        width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
        width: 650px;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 1000px;
    }
`

export const ProjectTitle = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`

////////////////// Stats SubCont

export const StatsSubCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`
export const TypeCont = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0.75rem 0;
    
    @media (min-width: ${theme.tabletSize}) {
        width: 225px;
        margin: 2rem 6rem 2rem 0;
    }
`
export const Category = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    margin: 0.5rem 0;
`
export const DataTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 26px;
`
export const PresLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`

////////////////// Image

export const ProjectImgCont = styled.div`
    margin: 1rem 0;
    height: 350px;
    margin: 3rem auto;

    @media (min-width: ${theme.tabletSize}) {
        height: auto;
    }
    @media (min-width: ${theme.desktopSize}) {
        border-radius: 25px;
        width: 1000px; 
        margin: 4rem auto;
    }
`
export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.imgBrightness});

    @media (min-width: ${theme.desktopSize}) {
        border-radius: 25px;
    }
`

////////////////// Description 

export const Description = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 26px;
    width: 325px;
    margin: 1rem auto 2rem;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`

export const ContentHeading = styled.h2`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 26px;
    width: 325px;
    margin: 0 auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`

///////////////// Project Navigation

export const ProjectNavCont = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 2rem 0.5rem 1rem;
    margin: 0 auto;

    @media (min-width: ${theme.tabletSize}) {
        padding: 2rem;
    }
`
export const NavCardCont = styled.div`
    overflow: hidden;
    width: 200px;
    margin: 0 0.5rem;

    @media (min-width: ${theme.skinnyWindowSize}) {
        width: 250px;
        margin: 0 1rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 300px;
        margin: 0 1rem;
    }
`
export const CardImg = styled.img`
    height: 150px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.imgBrightness});

    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 200px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 250px;
    }
`
export const CardTitle = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 30px;
`
