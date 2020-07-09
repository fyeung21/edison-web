import React from "react";
import { Link } from "react-router-dom";
import { TallCont, StyledImg } from "./workStyles";
import HoverCard from "./HoverCard";

const Tall = ({ title, description, img, link }) => {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <TallCont>
                <StyledImg
                    src={img}
                    alt="project thumbnail" />
                <HoverCard title={title} description={description} />
            </TallCont>
        </Link>
    );
}

export default Tall;