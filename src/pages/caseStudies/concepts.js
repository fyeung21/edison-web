import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";

const Concepts = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/concepts/coverimage-concepts.jpg")}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
        </CaseStudyCont>
    );
}

export default Concepts;