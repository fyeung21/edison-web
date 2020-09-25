import styled from "styled-components";
import { theme } from "../Theme";

export const HeroCont = styled.div`
    margin: 7rem auto 0rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 10rem auto 0rem;
    }
`

//////////////// Hero Main

export const HeroTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    font-weight: 400;
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 40px;
    width: 340px;

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h1FontSize};
        line-height: 60px;
        width: 550px;
    }
 
`

//////////////// HeroSubTxt

export const HeroSubCont = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        justify-content: space-between;
    }
`
export const SubTxt = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h4FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 0 5rem;
`

//////////////// LinkToWork

export const LinkCont = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme }) => theme.mainTxtColor};
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
`
export const Txt = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h4FontSize};
`