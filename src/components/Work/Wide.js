import React from "react";
import { Link } from "react-router-dom";
import { WideCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";
import { linkStyle } from "../Header/headerStyles";

const Wide = ({ title, description, img, link }) => {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <WideCont>
                <StyledImg
                    src={img}
                    alt="project thumbnail" />
                <HoverCard title={title} description={description} />
            </WideCont>
            <MobileVer>
                <CardInfo title={title} description={description} />
            </MobileVer>
        </Link>
    );
}

export default Wide;