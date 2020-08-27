import React from "react";
import { Container } from "../../components/globalStyles";
import { Heading, SubHeading, Description, Spacer, Image } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Feedplus = () => {
    return (
        <CaseLayout>
            <Banner bannerImg={require("../../assets/case-studies/feedplus/coverimage-feedplus.jpg")} />
            <Stats
                projectName={"feed+"}
                projectTime={"2.5 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DADmU9T-5IA/UN2lqk3J2f09zNs6qYIRfw/view?utm_content=DADmU9T-5IA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
            />

            <Container>
            <Heading>what is feed plus-</Heading>
                <Description>
                    Feed Plus is a concept mobile app. The focus of this project is to explore the theory of how people spend too much time on mobile social media apps and the solution is Feed Plus. It is currently a global problem that users are facing and are not doing anything about it. Major companies like Google and Apple have incorporated screen time management features into their respective mobile operating systems, but users are not taking advantage of them. Why? Simply because the users are still in control.
                </Description>

                <Description>
                    I designed this mobile app that combines the major social media apps all together but it comes with strict restrictions that no other mobile apps have. Through research, I found out that users tend to get side tracked when switching between mobile apps, and users tend to spend more time in total on each individual social media app. By using Feed Plus, users will spend less time in total and be less side tracked.
                </Description>
                    
            <Spacer />

            <SubHeading>user flow</SubHeading>
                <Image src={require("../../assets/case-studies/feedplus/userflow.jpg")} />
            
            <Spacer />

            <SubHeading>sketches</SubHeading>
                <Image src={require("../../assets/case-studies/feedplus/fp cardovp 0.jpg")} />

            <Spacer />
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 4.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 5.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 6.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 7.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp cardovp 8.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/fp-overview1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/feedplus/coverimage-feedplus.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Feedplus;