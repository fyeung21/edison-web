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
export const ImgSmallCont = styled.div`
    width: 300px;
    height: 300px;
    padding: 1rem 0;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const ImgExpandCont = styled.div`
    width: 800px;
    height: 650px;
    margin: 0 auto;
    padding: 5rem 0;
`
export const OverlayCont = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    z-index: 10;
`