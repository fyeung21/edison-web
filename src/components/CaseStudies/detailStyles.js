import styled from "styled-components";
import { theme } from "../Theme";

///////////// Banner

export const BannerCont = styled.div`
    height: 700px;
`
export const BannerImg = styled.img`
    height: 100%;
    width: 100%;
    filter: brightness(${({ theme }) => theme.imgBrightness});
`

///////////// Stats

export const StatsMainCont = styled.div`
    margin: 4rem auto 8rem;
`

export const ProjectHeading = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`

////////////////// SubCont

export const StatsSubCont = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 0;
    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
    }
`
export const TypeCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.75rem 0;
    @media (min-width: ${theme.tabletSize}) {
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
export const DataTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`
export const PresLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`

////////////////// Image

export const ProjectImgCont = styled.div`
    margin: 1rem 0;
    height: 500px;
`
export const Image = styled.img`
    height: 100%;
    width: 100%;
    filter: brightness(${({ theme }) => theme.imgBrightness});
`

////////////////// Description

export const DescriptionCont = styled.div`
    margin: 4rem 0;
`
export const DescTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 26px;
`