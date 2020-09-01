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
                projectTime={"8.0 weeks + ongoing volunteer"}
                myRole={"UX + UI, Scrum master"}
                team={"1 UX + UI / 2 Web Devs / 2 Community Coor"}
                others={"Design volunteers"}
                tools={"Figma / Illustrator / Photoshop / Miro"}
                platform={"Desktop and mobile site"}
            />
            <Container>
                <Description>
                    page under construction
                </Description>
            </Container>
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/coverimage-assistlist-la.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Assistlist;