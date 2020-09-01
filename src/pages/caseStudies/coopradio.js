import React from "react";
import { Container } from "../../components/globalStyles";
import { Description } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const CoopRadio = () => {
    return (
        <CaseLayout>
            <Banner bannerImg={require("../../assets/case-studies/coopradio/coverimage-coopradio.jpg")} />
            <Stats
                projectName={"Coop Radio"}
                projectTime={"2.5 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"desktop website"}
                presentation={"https://medium.com/@koedison/microsite-radio-program-e574885c5312"}
                team={"3 UX / 3 UI / 4 Dev "}
                client={"Vancouver Coop Radio"}
            />
            <Container>
                <Description>
                    page under construction
                </Description>
            </Container>
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default CoopRadio;