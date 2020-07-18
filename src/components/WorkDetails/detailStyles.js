import styled from "styled-components";
import { theme } from "../Theme";

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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 0;
`
export const TypeCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 6rem 2rem 0;
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
    color: ${({ theme }) => theme.mainTxtColor}
`