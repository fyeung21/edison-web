import React from "react";
import ChevronUp from "../Icons/ChevronUp";
import ScrollToTop from "react-scroll-to-top";
import { theme } from "../Theme";
import styled from "styled-components";
import "./styles.css";

const BackTopCont = styled.div`
    display: flex;
    position: fixed;
    justify-content: flex-end;
    z-index: 5;
    bottom: 50px;
    padding-right: 1px;

    width: 325px;
    margin: 0 auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 365px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`

const BackTop = () => {
    return (
        <BackTopCont>
            <ScrollToTop smooth component={<ChevronUp />} className="back-top" />
        </BackTopCont>
    );
}

export default BackTop;