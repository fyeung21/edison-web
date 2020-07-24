import React from "react";
import { Container } from "../globalStyles";
import { DescriptionCont, DescTxt } from "./caseStyles"

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