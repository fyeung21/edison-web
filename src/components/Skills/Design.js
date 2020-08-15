import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillCategory, Txt, TxtCont } from "./skillsStyles";
import MountSun from "../Icons/MountSun";

const Design = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <MountSun />
                </IconCont>
                <TxtCont>
                    <SkillCategory>design</SkillCategory>
                    <Txt>adobe suite</Txt>
                    <Txt>sketch</Txt>
                    <Txt>figma</Txt>
                    <Txt>invision</Txt>
                    <Txt>principle</Txt>
                </TxtCont>
            </Flex>
        </SkillsSubCont>
    );
}

export default Design;