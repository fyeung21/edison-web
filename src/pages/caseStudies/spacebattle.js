import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import Description from "../../components/WorkCaseStudies/Description";

const Spacebattle = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")}
            />
            <Stats
                projectName={"Space Battle Ex"}
                projectTime={"0.5 week"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop / Figma"}
                platform={"iOS Mobile App"}
                presentation={null}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
        </CaseStudyCont>
    );
}

export default Spacebattle;