import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { NavCardCont, CardImg, CardTitle } from "./caseStyles";

const NavCard = ({ link, cardImg, title }) => {
    return (
        <Link to={link} rel="noopener noreferrer" style={linkStyle}>
            <NavCardCont>
                <CardImg src={cardImg} alt={"card img"} />
                <CardTitle>{title}</CardTitle>
            </NavCardCont>
        </Link>
    );
}

export default NavCard;