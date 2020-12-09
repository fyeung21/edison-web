import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, SubHeading, Columns, Spacer, TrioContent, TrioImgCont, TxtLink } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const Netflix = () => {
    return (
        <CaseLayout>
            <Head title={"Netflix"} />
            <Banner bannerImg={require("../../assets/case-studies/netflix/netflix_logo.jpg")} />
            <Stats
                projectName={"Netflix"}
                projectTime={"on-going"}
                myRole={"Graphic, UX + UI"}
                tools={"Figma / Illustrator / Photoshop"}
                platform={"Desktop and Mobile"}
                />

            <Container>
                <Heading>who is TransLink and what is Compass-</Heading>
                <Description>
                    Over the past months, the pandemic has changed millions of consumers behavior. Researchers are seeing changes from wide range of sectors such as food, shopping, investments, and media consumptions. Reported by McKindsey & Company, consumers are heavily relying on online shopping for their purchases and are led by majority of millennials. There is also a rising trend in shift in brand loyalty, meaning consumers are switching brands at a higher rate than before as people are trying out more different products. Other sectors like financial investment trading also going up on the rise as reported by Wealthsimple and WealthBar, again driving up the rise by millennials. <TxtLink href="https://www.w3schools.com/jsref/jsref_link.asp"><a>hello link test</a></TxtLink>
                </Description>

                <Spacer />

                <Heading>what are we trying to solve-</Heading>
                <Description>
                    As industries are moving toward contactless payments, many companies have adapted the use of using Apple Pay, Google Pay or their own payment/wallet app to make it more convenient for its users. However, in the case of TransLink, they have announced they have no plans to bring a mobile app to the community anytime soon. This disappointed many locals as why isn't there a mobile app to assist their needs.
                </Description>
                <Description>
                    In this case study, I want to take on the challenge and see what a mobile app be like designed specifically for TransLink users.
                </Description>

                <Spacer />

                <SubHeading>defining a feasible goal-</SubHeading>
                <Columns>
                    <TrioContent>
                        <TrioImgCont>
                            <Heading>essentiality-</Heading>
                        </TrioImgCont>
                        <Description>
                            Accommodate at least two of the core functionalities of the mobile app.
                        </Description>
                    </TrioContent>

                    <TrioContent>
                        <TrioImgCont>
                            <Heading>reliability-</Heading>
                        </TrioImgCont>
                        <Description>
                            Provide the users a sense of reliability so they feel confident to use when using the mobile app on-the-go.
                        </Description>
                    </TrioContent>

                    <TrioContent>
                        <TrioImgCont>
                            <Heading>simplicity-</Heading>
                        </TrioImgCont>
                        <Description>
                            Provide a simple and easy user interface so they do not feel overwhelmed by the amount of information and help assist to accomplish their tasks.
                        </Description>
                    </TrioContent>

                </Columns>

    
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 4.jpg")} />
  
            <ProjectNav />
        </CaseLayout>
    );
}

export default Netflix;