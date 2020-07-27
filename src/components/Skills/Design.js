import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillHeading, Txt, TxtCont } from "./skillsStyles";
import MountSun from "../Icons/MountSun";

const Design = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <MountSun />
                </IconCont>
                <TxtCont>
                    <SkillHeading>design</SkillHeading>
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