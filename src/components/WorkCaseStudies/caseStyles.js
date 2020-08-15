import styled from "styled-components";
import { theme } from "../Theme";

export const CaseStudyCont = styled.div`
    margin: 2rem 0 5rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0 0 5rem;
    }
`

///////////// Banner

export const BannerCont = styled.div`
    height: 400px;

    @media (min-width: ${theme.tabletSize}) {
        height: 850px;
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
    margin: 4rem 0;
`

export const ProjectTitle = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h2FontSize};
    }
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
        width: 175px;
        margin: 2rem 2rem 2rem 0;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        margin: 2rem 2.25rem 2rem 0;
    }
    @media (min-width: ${theme.desktopSize}) {
        margin: 2rem 4.5rem 2rem 0;
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

////////////////// Styles for Writing Content (found in case study pages, not in a component)

export const Columns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3rem 0;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        margin: 0;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    :last-child {
        margin-bottom: 0;
    }
    
    @media (min-width: ${theme.tabletSize}) {
        width: 300px;
        margin: 0;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        width: 400px;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 475px;
        margin: 0;
    }
`
export const Heading = styled.h1`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    font-weight: 400;
    margin: 0.75rem 0 2rem;
`
export const SubHeading = styled.h2`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 500;
`
export const Description = styled.p`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    line-height: 30px;
    margin: 1rem 0;
`
export const Spacer = styled.div`
    margin: 4rem 0;
`

///////////////// Project Navigation

export const ProjectNavCont = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 7rem 2rem 2rem;
    margin: 0 auto;

    @media (min-width: ${theme.tabletSize}) {
        padding: 10rem 2rem 2rem
    }
`
export const NavCardCont = styled.div`
    overflow: hidden;
    width: 350px;
    margin: 0 1rem;
`
export const CardImg = styled.img`
    height: 250px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
    filter: grayscale(100%) brightness(${({ theme }) => theme.imgBrightness});
    transition: filter .5s linear;

    :hover {
        filter:grayscale(0%) brightness(${({ theme }) => theme.imgBrightness});
        transition: filter .08s linear;
    }

    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 250px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 250px;
    }
`