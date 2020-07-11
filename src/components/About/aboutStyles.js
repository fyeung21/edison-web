import styled from "styled-components";
import { theme } from "../Theme";

export const AboutCont = styled.div`
    margin: 0 auto 8rem;
`
export const AboutTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 2.5rem;
    margin: 2rem auto;
`