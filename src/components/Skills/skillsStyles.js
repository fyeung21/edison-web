import styled from "styled-components";
import { theme } from "../Theme";

export const SkillsCont = styled.div`
    margin: 8rem auto;
`
////////////

export const SkillsSubCont = styled.div`
    margin: 3rem 0;
`
export const SkillHeading = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 0;
`
export const SkillTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0.25rem 0;
`