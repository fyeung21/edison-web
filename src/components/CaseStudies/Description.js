import React from "react";
import { DescriptionCont, DescTxt } from "./detailStyles"

const Description = ({ description }) => {
    return (
        <DescriptionCont>
            <DescTxt>{description}</DescTxt>
        </DescriptionCont>
    );
}

export default Description;