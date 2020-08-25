import React from "react";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Concepts = () => {
    return (
        <CaseLayout>
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
            <ProjectNav />
        </CaseLayout>
    );
}

export default Concepts;