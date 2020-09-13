import React from "react";
import { Container } from "../../components/globalStyles";
import { Description } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const Ecommerce = () => {
    return (
        <CaseLayout>
            <Head title={"Ecommerce"} />
            <Banner bannerImg={require("../../assets/case-studies/ecommerce/coverimage-ecommerce.jpg")} />
            <Stats
                projectName={"E-commerce Retail"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Miro / Invision"}
                platform={"desktop website"}
                presentation={"https://medium.com/@koedison/e-commerce-store-bicycles-1c3f1ed86c6e"}
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

export default Ecommerce;