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
            <Banner bannerImg={require("../../assets/case-studies/ffautoworks/bcard-mockup-03.jpg")} />
            <Stats
                projectName={"Form + Function Autoworks"}
                projectTime={"4.0 weeks"}
                myRole={"Graphic, UX + UI Designer"}
                tools={"Figma / Illustrator / Photoshop / In Design"}
                platform={"Branding, Desktop and Mobile"}
                client={"Form and Function Autoworks"}
            />
            <Container>
                <Description>
                    project in progress
                </Description>

                <Spacer />

                <SubHeading>logo design</SubHeading>
                <Image src={require("../../assets/case-studies/ffautoworks/fflogo_main_final.jpg")} />
                
                <Spacer />

                <SubHeading>t-shirt design</SubHeading>
                <Image src={require("../../assets/case-studies/ffautoworks/fftshirt_design.jpg")} />
                
                <Spacer />
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/ffautoworks/fftshirt-mockup-front.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/ffautoworks/fftshirt-mockup-back.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/ffautoworks/bcard-mockup-01.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/ffautoworks/bcard-mockup-03.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/ffautoworks/bcard-mockup-02.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default FFautoworks;