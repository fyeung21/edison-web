import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillCategory, Txt, TxtCont } from "./skillsStyles";
import Award from "../Icons/Award";

const Experience = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <Award />
                </IconCont>
                <TxtCont>
                    <SkillCategory>experience</SkillCategory>
                    <Txt>web designer</Txt>
                    <Txt>ux + ui designer</Txt>
                    <Txt>design teaching assistant</Txt>
                    <Txt>financial advisor</Txt>
                    <Txt>retail supervisor</Txt>
                </TxtCont>
            </Flex>
        </SkillsSubCont>
    );
}

export default Experience;