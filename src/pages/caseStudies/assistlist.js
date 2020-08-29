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
                projectName={"Assist List"}
                projectTime={"2.5 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DADmU9T-5IA/UN2lqk3J2f09zNs6qYIRfw/view?utm_content=DADmU9T-5IA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
            />
            <Container>
                <Description>
                    Feed+ is a concept project that I took on for my final at RED Academy. My focus is to
                    explore the theory of how people spend too much time on mobile social media apps. It is
                    currently a global problem that we are facing and we are not doing anything about it.
                    Major companies like Google and Apple have incorporated screen time management features
                    into their respective mobile operating systems, but people are not taking advantage of
                    them. Why? Because the users are still in control.
                </Description>
                <Description>
                    I designed a mobile app that combines the major social media apps together. Through
                    research, I found out that users tend to get side tracked when switching between
                    mobile apps. In addition, users tend to spend more time in total on each individual
                    social media apps. By designing a combined version, this way users will spend less
                    time in total and be less side tracked. Furthermore, this app will also have a built-in
                    strict mode to lock users out when a specified time or post limit is reached.
                </Description>
            </Container>
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Assistlist;