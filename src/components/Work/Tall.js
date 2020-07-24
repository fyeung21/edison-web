import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { TallCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const Tall = ({ title, description, img, link }) => {
    return (
        <Link to={link} rel="noopener noreferrer" style={linkStyle}>
            <TallCont>
                <StyledImg
                    src={img}
                    alt="project thumbnail" />
                <HoverCard title={title} description={description} />
            </TallCont>
            <MobileVer>
                <CardInfo title={title} description={description} />
            </MobileVer>
        </Link>
    );
}

export default Tall;