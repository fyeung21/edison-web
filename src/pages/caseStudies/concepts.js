import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Banner from "../../components/WorkCaseStudies/Banner";
// import Stats from "../../components/WorkCaseStudies/Stats";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
// import Description from "../../components/WorkCaseStudies/Description";

const Concepts = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/concepts/coverimage-concepts.jpg")}
            />
            {/* <Stats
                projectName={"Concepts"}
                projectTime={null}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={null}
                presentation={null}
            /> */}
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            {/* <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            /> */}
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