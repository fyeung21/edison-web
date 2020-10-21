import React from "react";
import { Container } from "../../components/globalStyles";
import { Image, Description, SubHeading, Spacer } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const FFautoworks = () => {
    return (
        <CaseLayout>
            <Head title={"Form + Function Autoworks"} />
            <Banner bannerImg={require("../../assets/case-studies/ffautoworks/coverimage-ffautoworks.jpg")} />
            <Stats
                projectName={"Form + Function Autoworks"}
                projectTime={"4.0 weeks"}
                myRole={"Graphic, UX + UI Designer"}
                tools={"Figma / Illustrator / Photoshop / In Design"}
                platform={"Branding, Desktop and Mobile"}
                client={"Form + Function Autoworks"}
            />
            <Container>
                <Description>
                    project in progress
                </Description>

                <Spacer />

                <SubHeading>design stage</SubHeading>
                <Image src={require("../../assets/case-studies/assistlist/listing-redesign.jpg")} />
                
                <Spacer />
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/assistlist/al-cardovp-4.jpg")} />

            <ProjectNav />
        </CaseLayout>
    );
}

export default FFautoworks;