import React from "react";
import { CardTitle, CardDesc } from "./workStyles";

const CardInfo = ({ title, description }) => {

    return (
        <>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{description}</CardDesc>
        </>
    );
}

export default CardInfo;