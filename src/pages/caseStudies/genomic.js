import React from "react";
import { Container } from "../../components/globalStyles";
import { Description } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Genomic = () => {
    return (
        <CaseLayout>
            <Banner
                bannerImg={require("../../assets/case-studies/genomic/coverimage-genomic.jpg")}
            />
            <Stats
                projectName={"Genomic Science"}
                projectTime={"2.5 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"iOS Mobile App"}
                presentation={"https://blog.prototypr.io/genomic-science-e6389187554?gi=9bccff31ac01"}
                team={"3 UX / 3 UI "}
                client={"Koonkie"}
            />
            <Container>
                <Description>
                    page under construction
                </Description>
            </Container>
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}/>
            <ProjectNav />
        </CaseLayout>
    );
}

export default Genomic;