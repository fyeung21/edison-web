import React from "react";
import { Link } from "react-router-dom";
import { WideCont, StyledImg } from "./workStyles";
import HoverCard from "./HoverCard";

const Wide = ({ title, description, img, link }) => {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <WideCont>
                <StyledImg
                    src={img}
                    alt="project thumbnail" />
                <HoverCard title={title} description={description} />
            </WideCont>
        </Link>
    );
}

export default Wide;