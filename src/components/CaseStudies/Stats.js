import React from "react";
import { StatsMainCont, ProjectHeading, StatsSubCont, TypeCont, Category, DataTxt, PresLink } from "./detailStyles";

const Stats = ({ projectName, projectTime, myRole, tools, platform, presentation }) => {
    return (
        <StatsMainCont>
            <ProjectHeading>{projectName}</ProjectHeading>
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
    );
}

export default Stats;