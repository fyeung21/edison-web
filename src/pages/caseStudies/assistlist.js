import React from "react";
import { Container } from "../../components/globalStyles";
import { Description } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Assistlist = () => {
    return (
        <CaseLayout>
            <Banner bannerImg={require("../../assets/case-studies/assistlist/coverimage-assistlist.jpg")} />
            <Stats
                projectName={"AssistList"}
                projectTime={"8.0 weeks"}
                myRole={"UX + UI, Scrum master"}
                tools={"Figma / Illustrator / Photoshop / Miro"}
                platform={"Desktop and mobile site"}
            />
            <Container>
                <Description>
                    description
                </Description>
            </Container>
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/coverimage-assistlist.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Assistlist;