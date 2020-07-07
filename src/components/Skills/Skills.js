import React from "react";
import { SkillsCont } from "./skillsStyles";
import Experience from "./Experience";
import Education from "./Education";
import Design from "./Design";

const Skills = () => {
    return (
        <SkillsCont>
            <Experience />
            <Education />
            <Design />
        </SkillsCont>
    );
}

export default Skills;