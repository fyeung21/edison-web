import React from "react";
import { StatsMainCont, ProjectTitle, StatsSubCont, TypeCont, Category, DataTxt, PresLink } from "./caseStyles";
import { Container } from "../globalStyles";

const Stats = ({ projectName, projectTime, myRole, tools, platform, presentation }) => {
    return (
        <Container>
            <StatsMainCont>
                <ProjectTitle>{projectName}</ProjectTitle>
                <StatsSubCont>
                    <TypeCont>
                        <Category>project time</Category>
                        <DataTxt>{projectTime}</DataTxt>
                    </TypeCont>
                    <TypeCont>
                        <Category>my role</Category>
                        <DataTxt>{myRole}</DataTxt>
                    </TypeCont>
                    <TypeCont>
                        <Category>tools</Category>
                        <DataTxt>{tools}</DataTxt>
                    </TypeCont>
                    <TypeCont>
                        <Category>platform</Category>
                        <DataTxt>{platform}</DataTxt>
                    </TypeCont>
                    <TypeCont>
                        <Category>presentation</Category>
                        <PresLink href={presentation}>case study link</PresLink>
                    </TypeCont>
                </StatsSubCont>
            </StatsMainCont>
        </Container>
    );
}

export default Stats;