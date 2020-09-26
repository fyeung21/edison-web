import React from "react";
import { SkillsCont } from "./skillsStyles";
import Experience from "./Experience";
// import Education from "./Education";
// import Design from "./Design";
// import Code from "./Code";

const Skills = () => {
    return (
        <SkillsCont>
            <Experience />
            {/* <Education />
            <Design />
            <Code /> */}
        </SkillsCont>
    );
}

export default Skills;