import styled from "styled-components";
import { theme } from "../Theme";

////////////// Main Skills Container

export const SkillsCont = styled.div`
    margin: 8rem auto;
`
////////////// Styling for each Skills category

export const SkillsSubCont = styled.div`
    margin: 3rem 0;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: row;
`
export const IconCont = styled.div`
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0.75rem 0.75rem 0 0;
`
export const SkillCategory = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 0;
`
export const TxtCont = styled.div`
    display: block;
`
export const Txt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0.25rem 0;
`