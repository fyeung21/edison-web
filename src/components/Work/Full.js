import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { linkStyle } from "../globalStyles";
import { FullCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const Full = ({ title, description, img, link }) => {
    return (
        <Link to={link} rel="noopener noreferrer" style={linkStyle}>
            <LazyLoad debounce={false} offsetVertical={1000}>
                <FullCont>
                    <StyledImg
                        src={img}
                        alt="project thumbnail" />
                    <HoverCard title={title} description={description} />
                </FullCont>
            </LazyLoad>
            <MobileVer>
                <CardInfo title={title} description={description} />
            </MobileVer>
        </Link>
    );
}

export default Full;