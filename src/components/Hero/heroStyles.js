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
    color: ${({ theme }) => theme.mainTxtColor};
    letter-spacing: 0.10rem;

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
export const AccentTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h5FontSize};
    color: ${({ theme }) => theme.accentColor};
    letter-spacing: 0.10rem;
    margin-left: 0.75rem;
    
    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h2FontSize};
        margin-left: 1.25rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        font-size: ${theme.h1FontSize};
        margin-left: 1.75rem;
    }
`

//////////////// HeroSubTxt

export const HeroSubCont = styled.div`
    display: flex;
    align-items: center;
`
export const Txt1 = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h6FontSize};
    color: ${({ theme }) => theme.heroSubColor1};

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h3FontSize};
    }
`
export const Txt2 = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h6FontSize};
    color: ${({ theme }) => theme.heroSubColor2};

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h3FontSize};
    }
`
export const Txt3 = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h6FontSize};
    color: ${({ theme }) => theme.heroSubColor3};

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h3FontSize};
    }
`
export const Dot = styled.p`
    background-color: ${({ theme }) => theme.dotColor};
    border-radius: 50%;
    padding: 0.25rem;
    text-align: center;
    margin: 0.25rem 0.75rem 0;
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
    color: ${({ theme }) => theme.accentTxtColor};
    :hover {
        color: ${({ theme }) => theme.mainTxtColor};
    }

    @media (min-width: ${theme.tabletSize}) {
        font-size: ${theme.h3FontSize};
    }
`
export const iconStyle = {
    fontWeight: 600,
    margin: 3
}