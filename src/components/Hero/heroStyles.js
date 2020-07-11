import styled from "styled-components";
import { theme } from "../Theme";

export const HeroCont = styled.div`
    margin: 15rem auto;

    @media (min-width: ${theme.tabletSize}) {
        margin: 20rem auto;
    }
`
export const FlexSubHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
    }
`

//////////////// Hero Main

export const HeroTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h5FontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h2FontSize};
    }
    @media (min-width: ${theme.desktopSize}) {
        font-size: ${theme.h1FontSize};
    }
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
`

//////////////// HeroSubTxt

export const HeroSubCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const SubTxt = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h6FontSize};
    color: ${({ theme }) => theme.mainTxtColor};

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