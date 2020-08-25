import React from "react";
import ScrollToTop from "react-scroll-to-top";
import ChevronUp from "../Icons/ChevronUp";
import styled from "styled-components";
import { theme } from "../Theme";
import "./styles.css";

const ReturnTopCont = styled.div`
    display: flex;
    position: fixed;
    justify-content: flex-end;
    z-index: 5;
    bottom: 70px;
    padding-right: 1px;

    width: 337px;
    margin: 0 auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 377px;
    }
    @media (min-width: ${theme.tabletSize}) {
      bottom: 50px;
      width: 650px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 850px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`

const ReturnTop = () => {
  return (
    <ReturnTopCont>
      <ScrollToTop smooth component={<ChevronUp />} className="return-top" />
    </ReturnTopCont>
  );
}

export default ReturnTop;