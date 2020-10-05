import styled from "styled-components";
import { theme } from "../Theme";

export const HeadingDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.activeTxtColor};
    margin: 1rem 0;
`
export const DisplayFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const ThumbnailCont = styled.div`
    width: 300px;
    height: 300px;
`