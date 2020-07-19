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
    font-size: ${theme.h5FontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 40px;

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h2FontSize};
        line-height: 60px;
    }
    @media (min-width: ${theme.desktopSize}) {
        font-size: ${theme.h1FontSize};
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
    font-size: ${theme.h6FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 0 4rem;

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h3FontSize};
    }
`

//////////////// LinkToWork

export const LinkCont = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const Txt = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h6FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h3FontSize};
    }
`
export const iconStyle = {
    fontWeight: 600,
    margin: 3
}