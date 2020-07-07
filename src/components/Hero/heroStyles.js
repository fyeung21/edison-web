import styled from "styled-components";
import { theme } from "../Theme";

export const HeroCont = styled.div`
    margin: 20rem 15rem 0;
`
export const HeroTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h1FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: normal;
    letter-spacing: 0.10rem;
    margin: 0.5rem 0;
`
export const Flex = styled.div`
    display: flex;
`
export const AccentTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h1FontSize};
    color: ${({ theme }) => theme.accentColor};
    letter-spacing: 0.10rem;
    margin: 0.5rem 0 0.5rem 1.75rem;
`

//////////////// HeroSubTxt

export const HeroSubCont = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;
`
export const Txt1 = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.heroSubColor1};
`
export const Txt2 = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.heroSubColor2};
`
export const Txt3 = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.heroSubColor3};
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
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    :hover {
        color: ${({ theme }) => theme.mainTxtColor};
    }
`
export const iconStyle = {
    fontWeight: 600,
    margin: 3
}