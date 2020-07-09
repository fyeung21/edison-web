import React from "react";
import { HoverCont } from "./workStyles";
import CardInfo from "./CardInfo";

const HoverCard = ({ title, description }) => {
    return (
        <HoverCont>
            <CardInfo title={title} description={description} />
        </HoverCont>
    );
}

export default HoverCard;