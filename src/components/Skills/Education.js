import React from "react";
import { SkillsSubCont, Flex, IconCont, SkillHeading, Txt, TxtCont } from "./skillsStyles";
import BookOpen from "../Icons/BookOpen";

const Education = () => {
    return (
        <SkillsSubCont>
            <Flex>
                <IconCont>
                    <BookOpen />
                </IconCont>
                <TxtCont>
                    <SkillHeading>education</SkillHeading>
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