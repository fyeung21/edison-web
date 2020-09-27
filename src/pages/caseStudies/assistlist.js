import React from "react";
import { Container } from "../../components/globalStyles";
import { Content, Columns, Image, Description, SubHeading, Heading, Spacer } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const Assistlist = () => {
    return (
        <CaseLayout>
            <Head title={"AssistList"} />
            <Banner bannerImg={require("../../assets/case-studies/assistlist/coverimage-assistlist.jpg")} />
            <Stats
                projectName={"AssistList"}
                projectTime={"8.0 weeks + ongoing volunteer"}
                myRole={"UX + UI, Scrum master"}
                team={"1 UX + UI / 2 Web Devs / 2 Community Coor"}
                others={"Design volunteers"}
                tools={"Figma / Illustrator / Photoshop / Miro"}
                platform={"Desktop and mobile site"}
                client={"AssistList"}
            />
            <Container>
                <Description>
                    page under construction
                </Description>

                <Spacer />

                <Heading>who is AssistList-</Heading>
                <Description>
                    AssistList is a non-profit charity in British Columbia that provides an online platform to allow the community to buy, sell or donate health and medical equipment. The mission of AssistList is to improve the quality of life by: going green, reuse health equipment that are no longer in use, and to provide opportunities for those in need without the concern to purchase brand new health equipment.
                </Description>

                <Spacer />

                <Heading>what are we trying to solve-</Heading>
                <Description>
                AssistList is built by the community volunteers and they have contributed over thousands of hours ever since it was launched in 2018. Over the past two years, the organization has evolved to a reliable online platform where the community can rely on. The next stage is to evolve the platform to a more resourceful platform while bringing a new modern and fresh design to allow everything to be cohesive and consistent.
                </Description>

                <Spacer />

                <Heading>defining a feasible goal-</Heading>
                <Description>
                    <ul>
                        <li>· Define a design system and style for the brand, keeping accessibility and simplicity in mind.</li>
                        <li>· Find ways to revise and improve the support to its end users.</li>
                    </ul>
                </Description>
                
                <Spacer />

                <SubHeading>design stage</SubHeading>
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
            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-c.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Assistlist;