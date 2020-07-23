import React from "react";
import { Container } from "../globalStyles";
import { DescriptionCont, DescTxt } from "./detailStyles"

const Description = ({ description }) => {
    return (
        <Container>
            <DescriptionCont>
                <DescTxt>{description}</DescTxt>
            </DescriptionCont>
        </Container>
    );
}

export default Description;