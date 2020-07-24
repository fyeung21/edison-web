import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";

const CoopRadio = () => {
    return (
        <CaseStudyCont>
            <Banner bannerImg={require("../../assets/case-studies/coopradio/coverimage-coopradio.jpg")} />
            <Stats
                projectName={"Coop Radio"}
                projectTime={"2.5 weeks"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"desktop website"}
                presentation={"https://medium.com/@koedison/microsite-radio-program-e574885c5312"}
            />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        </CaseStudyCont>
    );
}

export default CoopRadio;