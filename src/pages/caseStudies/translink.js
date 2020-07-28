import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Translink = () => {
    return (
        <CaseStudyCont>
            <Banner bannerImg={require("../../assets/case-studies/translink/coverimage-translink.jpg")} />
            <Stats
                projectName={"Translink Compass"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DAD7VmqxQhc/7eRKD-ef_RatsS_RuACCbw/view?utm_content=DAD7VmqxQhc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
            />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseStudyCont>
    );
}

export default Translink;