import React from "react";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Spacebattle = () => {
    return (
        <CaseLayout>
            <Banner bannerImg={require("../../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")} />
            <Stats
                projectName={"Space Battle Ex"}
                projectTime={"0.5 week"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Figma"}
                platform={"iOS Mobile App"}
            />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Spacebattle;