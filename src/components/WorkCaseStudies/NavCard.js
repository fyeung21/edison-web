import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../globalStyles";
import { NavCardCont, CardImg } from "./caseStyles";

const NavCard = ({ link, cardImg }) => {
    return (
        <Link to={link} rel="noopener noreferrer" style={linkStyle}>
            <NavCardCont>
                <CardImg src={cardImg} alt={"card img"} />
            </NavCardCont>
        </Link>
    );
}

export default NavCard;