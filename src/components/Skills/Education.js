import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillCategory, Txt, TxtCont } from "./skillsStyles";
import BookOpen from "../Icons/BookOpen";

const Education = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <BookOpen />
                </IconCont>
                <TxtCont>
                    <SkillCategory>education</SkillCategory>
                    <Txt>certificate in nodejs</Txt>
                    <Txt>user experience design diploma</Txt>
                    <Txt>certificate in general fine arts</Txt>
                    <Txt>bachelor of business administration in marketing management</Txt>
                </TxtCont>
            </Flex>
        </SkillsSubCont>
    );
}

export default Education;