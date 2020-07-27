import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillHeading, Txt, TxtCont } from "./skillsStyles";
import CodeBrace from "../Icons/CodeBrace";

const Code = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <CodeBrace />
                </IconCont>
                <TxtCont>
                    <SkillHeading>code</SkillHeading>
                    <Txt>html</Txt>
                    <Txt>css</Txt>
                    <Txt>javascript</Txt>
                    <Txt>nodejs</Txt>
                </TxtCont>
            </Flex>
        </SkillsSubCont >
    );
}

export default Code;