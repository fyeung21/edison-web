import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillHeading, Txt, TxtCont } from "./skillsStyles";
import Award from "../Icons/Award";

const Experience = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <Award />
                </IconCont>
                <TxtCont>
                    <SkillHeading>experience</SkillHeading>
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