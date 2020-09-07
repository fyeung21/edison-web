import React from "react";
import { Container } from "../../components/globalStyles";
import { Content, Columns, Image, Description, SubHeading, Heading, Spacer } from "../../components/WorkCaseStudies/caseStyles";
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

                <Spacer />

                <SubHeading>design process</SubHeading>
                <Columns>
                    <Content>
                        <Heading>the blueprint-</Heading>
                        <Image src={require("../../assets/case-studies/assistlist/blueprint-listing-redesign.jpg")} />
                    </Content>

                    <Content>
                        <Heading>the final mockup-</Heading>
                        <Image src={require("../../assets/case-studies/assistlist/listing-redesign.jpg")} />
                    </Content>
                </Columns>

                <Spacer />
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-4.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-6.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-5.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-ipad-aboutus.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/coverimage-assistlist.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Assistlist;