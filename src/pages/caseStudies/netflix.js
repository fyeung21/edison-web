import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, SubHeading, Image, Spacer, TxtLink } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
// import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
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
                tools={"Miro / Origami Studio / Figma / Illustrator / Photoshop"}
                platform={"Desktop and Mobile"}
                />

            <Container>
                <Description>
                    project in progress
                </Description>

                <Spacer />

                <Description>
                    Netflix is an online streaming platform and also a production company that showcases over 5,000 TV shows and movies. They are one of the biggest streaming services in the world with over 195 million paid subscribers to-date.
                </Description>

                <Spacer />

                <Heading>what are we trying to solve-</Heading>
                <Description>
                    Ever since the 2020 pandemic struck the world unexpectedly, it has changed how consumers behave, whether its shopping, communicating with one another or commuting between places, it changed the way how companies understand its consumers. Businesses are scrambling to find ways to continue their businesses, but things are changing so rapidly and it’s hard to predict where the pandemic is shifting the consumers to. One thing for sure is that people are spending more time at home as most companies allow their employees to work from home, majority of the borders between countries are closed, and consumers have less disposable income. 
                </Description>
                <Description>
                    Recently, it was reported that Netflix no longer offers free trials for consumers as reported by <TxtLink href="https://www.independent.co.uk/life-style/gadgets-and-tech/netflix-free-trial-stop-us-uk-how-to-sign-up-b1033640.html"><a>Independent</a></TxtLink>, stating that they are looking for new ways to promote its platform as the world is heavily shifting to online media consumption content due to the on-going pandemic.
                </Description>
                <Description>
                    In this case study, I am going to take on the challenge to see how to tackle this and it to the next level.
                </Description>

                <Spacer />

                <SubHeading>the approach</SubHeading>
                <Heading>defining the goals-</Heading>
                <Description>
                    <ul>
                        <li>· Business goal: Reintroduce the trial experience for non-subscription users and drive them to subscriptions</li>
                        <li>· User needs: Rethink how users connect with their love ones while accommodate the functionality of sharing within the business guidelines</li>
                    </ul>
                </Description>
                <Description>
                    <SubHeading>Hypothesis</SubHeading>
                    <ul>
                        <li>· Users have the intention to watch movies/tv shows online with their loved ones (not in the same household) through online streaming services</li>
                        <li>· Users have to have the same streaming services to watch with each other, otherwise they are using screen share to watch together</li>
                        <li>· Existing paid subscribers are already sharing their accounts with family/non family members</li>
                        <li>· Business focus is to drive new paid subscriptions</li>
                    </ul>
                </Description>
                <Description>
                    <SubHeading>Metrics and success indicators</SubHeading>
                    <ul>
                        <li>· Qualitative feedback during a/b testing phase with a target of first 50-100 paid users</li>
                        <li>· How many accounts are used with more than one IP address or different from signed up IP address and/or exceeds their account sharing tiers</li>
                        <li>· How many paid subscribers are using the feature to watch with their friends and families</li>
                        <li>· How many paid subscribers returned to use the feature</li>
                        <li>· The click rate of non-subscribers to register for subscription and content browsing</li>
                        <li>· How many non-subscribers are recruited to the use the feature through a paid subscriber</li>
                        <li>· How many non-subscribers are converted to paid subscriber through exposure of the new feature</li>
                    </ul>
                </Description>

                <Spacer />

                <SubHeading>the research</SubHeading>
                <Heading>what's happening around the world-</Heading>
                <Description>
                    Due to the number of rising cases of COVID-19, people are shifting to online media consumption as movie theatres and other public places are ordered to closed by the health authorities. Some businesses are struggling to shift to e-commerce to keep up with the consumer behaviour shift. And most importantly, people are finding new ways to connect with their loved ones through video calls and mobile apps.
                </Description>
                <Description>
                    Over the past months, the pandemic has changed millions of consumers' behavior. Researchers are seeing changes in wide range of sectors such as food, shopping, investments, and media consumptions. Reported by <TxtLink href="https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-great-consumer-shift-ten-charts-that-show-how-us-shopping-behavior-is-changing"><a>McKindsey & Company</a></TxtLink>, consumers are heavily relying on online shopping for their purchases and are led by majority of millennials. There is also a rising trend in shift in brand loyalty, meaning consumers are switching brands at a higher rate than before as people are trying out more different products. Other sectors like financial investment trading also trending up as reported by <TxtLink href="https://globalnews.ca/news/7200337/covid-19-investing-stock-market-canada/"><a>Wealthsimple and WealthBar</a></TxtLink>, again driving up the trend by millennials.
                </Description>
                
                <Spacer />

                <SubHeading>paid subscribers CJM</SubHeading>
                <Image src={require("../../assets/case-studies/netflix/netflix_paidsub_cjm.jpg")} />
 
                <Spacer />
                
                <SubHeading>non-subscribers CJM</SubHeading>
                <Image src={require("../../assets/case-studies/netflix/netflix_freeuser_cjm.jpg")} />

                <Spacer />

                <Description>
                    project in progress
                </Description>

            </Container>
            <ProjectNav />
        </CaseLayout>
    );
}

export default Netflix;