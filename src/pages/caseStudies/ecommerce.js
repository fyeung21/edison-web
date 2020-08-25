import React from "react";
import { Container } from "../../components/globalStyles";
import { Heading, Description } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Ecommerce = () => {
    return (
        <CaseLayout>
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
                <Heading>Project Focus</Heading>
                <Description>
                    This school project is to design an e-commerce store that aggregates three retail stores
                    located on West 4th avenue in the City of Vancouver. Identifying the core users and find
                    key aspects that are lacking in these retailers to create an e-commerce store that can
                    provide a better user experience.
                </Description>
                <Description>
                    The three selected retail stores on West 4th avenue are: Giant/Liv Vancouver, Speed Theory,
                    and More Bikes.
                </Description>

                <Heading>Who are these retailers?</Heading>
                <Description>
                    These selected cyclist retailers are all located in Vancouver on West 4th Avenue. They
                    have all been operating for a number of years and only operate in Canada. These retailers
                    all focus on selling cyclist gears and bikes through their own retail and online shops.
                </Description>

                <Heading>Why are these shops struggling?</Heading>
                <Description>
                    Current design structures of the retailers do not provide a positive user experience to
                    their end users. As a result, end users may be abandoning the sites and shifting to their
                    competitors.
                </Description>
            </Container>
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Ecommerce;