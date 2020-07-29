import styled from "styled-components";
import { theme } from "../Theme";

export const HeroCont = styled.div`
    margin: 15rem auto;

    @media (min-width: ${theme.tabletSize}) {
        margin: 20rem auto;
    }
`

//////////////// Hero Main

export const HeroTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 40px;
    width: 340px;

    @media (min-width: ${theme.tabletSize}) {
        line-height: 60px;
        width: 350px;
    }
    @media (min-width: ${theme.desktopSize}) {
        font-size: ${theme.h1FontSize};
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
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 0 4rem;
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
    font-size: ${theme.h3FontSize};
`