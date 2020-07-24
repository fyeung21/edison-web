import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";

const Spacebattle = () => {
    return (
        <CaseStudyCont>
            <Banner bannerImg={require("../../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")} />
            <Stats
                projectName={"Space Battle Ex"}
                projectTime={"0.5 week"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop / Figma"}
                platform={"iOS Mobile App"}
                presentation={null}
            />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        </CaseStudyCont>
    );
}

export default Spacebattle;