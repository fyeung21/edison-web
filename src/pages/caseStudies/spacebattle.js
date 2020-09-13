import React from "react";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const Spacebattle = () => {
    return (
        <CaseLayout>
            <Head title={"Space Battle Ex"} />
            <Banner bannerImg={require("../../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")} />
            <Stats
                projectName={"Space Battle Ex"}
                projectTime={"0.5 week"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Figma"}
                platform={"iOS Mobile App"}
            />

            <ProjectImg projectImg={require("../../assets/case-studies/spacebattle/sb cardovp 1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/spacebattle/sb cardovp 2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/spacebattle/sb cardovp 3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/spacebattle/sb cardovp 4.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Spacebattle;