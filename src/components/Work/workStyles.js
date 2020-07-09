import styled from "styled-components";
import { theme } from "../Theme";

export const WorkCont = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 4rem auto 8rem;
`

///////////////  Tall

export const TallCont = styled.div`
    display: flex;
    height: 446px;
    width: 315px;
    margin: 1rem auto;
`
export const TallImg = styled.div`
    background-color: lightgrey;
    width: 100%;
    border-radius: 25px;
`

////////////////  Wide

export const WideCont = styled.div`
    display: flex;
    height: 446px;
    width: 630px;
    margin: 1rem auto;
`
export const WideImg = styled.div`
    background-color: lightgrey;
    width: 100%;
    border-radius: 25px;
`