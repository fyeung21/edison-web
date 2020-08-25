import React from "react";
import { CaseStudyCont } from "./caseStyles";
import { Container } from "../globalStyles";
import ReturnTop from "../ReturnTop/ReturnTop";

const CaseLayout = ({ children }) => {
    return (
        <CaseStudyCont>
            <Container>
                <ReturnTop />
            </Container>
            {children}
        </CaseStudyCont>
    );
}

export default CaseLayout;