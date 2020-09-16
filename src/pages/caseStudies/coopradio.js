import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, Spacer } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const CoopRadio = () => {
    return (
        <CaseLayout>
            <Head title={"Coop Radio"} />
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

                <Spacer />

                <Heading>who is Co-op Radio-</Heading>
                <Description>
                Co-op Radio is a non-profit local community radio station that has been operating since 1975 in the Vancouver BC. They have helped many underrepresented individuals in the city to reach out to a wider range of audiences. Their mission is “to produce creative and engaging programming for communities whose voices are underrepresented in the mainstream media.”
                </Description>

                <Spacer />

                <Heading>what are we trying to solve-</Heading>
                <Description>
                The project goal is to design and develop a microsite for an upcoming program for the station. This microsite will be separate from the station’s main site as its main focus is to draw attention to the program and for individuals to sign up for the program. In addition, this microsite will also allow the artists to showcase their songs for other users to listen.
                </Description>

                <Spacer />

                <Heading>the challenge-</Heading>
                <Description>
                The challenge for this project is finding the right path and content to be displayed so that potential artists will sign up to the program. There are a lot of content to be displayed, including the process of signing up, the program timeline, the benefits of the program, and most importantly, showcasing the artists’ songs. This microsite is similar to a landing page but with a bit more content to be displayed for end users to navigate around.
                </Description>

                <Spacer />
            </Container>
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default CoopRadio;