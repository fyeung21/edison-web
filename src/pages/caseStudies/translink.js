import React from "react";
import { Container } from "../../components/globalStyles";
import { CaseStudyCont, Description, Heading, SubHeading, Columns, Content, Spacer } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Translink = () => {
    return (
        <CaseStudyCont>
            <Banner bannerImg={require("../../assets/case-studies/translink/coverimage-translink.jpg")} />
            <Stats
                projectName={"Translink Compass"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DAD7VmqxQhc/7eRKD-ef_RatsS_RuACCbw/view?utm_content=DAD7VmqxQhc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
            />

            <Container>
            <Heading>who is TransLink and what is Compass-</Heading>
                <Description>
                    TransLink is a transportation network that operates in Metro Vancouver. Compass is a contactless payment system that is owned by TransLink. It was first launched in 2013 as beta and went public in 2015. It allows users to store money onto a physical card and pay fare fees to move around by bus, skytrain or seabus in Metro Vancouver.
                </Description>

                <Spacer />

                <Heading>what are we trying to solve-</Heading>
                <Description>
                    As the industry is moving towards contactless payment, many companies have adapted the use of using Apple Pay, Google Pay or their own payment/wallet app to make it more convenient for its users. However, in the case of TransLink, they have announced they have no plans to bring a mobile app to the public anytime soon. This disappointed many locals as why isn't there an app for this yet? What is holding the company back?
                </Description>
                <Description>
                    In this case study, I want to take on the challenge and see how life would be if there is a mobile app for TransLink Compass.
                </Description>

                <Spacer />
                
                <Heading>defining a feasible goal-</Heading>
                <Description>
                    <ul>
                        <li>· Basic needs - accommodate at least one or two top major features of the mobile app</li>
                        <li>· Reliability - so users feel confident to use on the go</li>
                        <li>· Simplicity - so users feel comfortable to use without hesitation</li>
                    </ul>
                </Description>
                
                <Spacer />
                
                <SubHeading>domain research</SubHeading>
                <Heading>what's happening in the community-</Heading>
                <Description>
                    Metro Vancouver has the highest per capita transit ridership to work compared to a number major cities in North America. Latest TransLink data shows exponential annual grow of ridership across all transit platforms (Bus, Skytrain, and Seabus). Furthermore, the Canadian Payment Methods and Trends in 2018 illustrate contactless payment is on the rise and increasing year after year, especially in the mobile sector. 
                </Description>
                <Description>
                    What does all this mean? Data shows there is a huge market for mobile contactless payment. Given the current trend, many companies are jumping onboard with mobile payment systems.
                </Description>

                <Spacer />
                
                <SubHeading>current pain points</SubHeading>
                <Heading>website audit-</Heading>
                <Description>
                    <ul>
                        <li>· No mobile app for TransLink or Compass, which result in no mobile payment at terminals</li>
                        <li>· Very limited features offered on Compass site, purchasing card, reloading card, and checking card balance only</li>
                        <li>· Some features redirect users to TransLink site</li>
                    </ul>
                </Description>

                <Spacer />
                
                <SubHeading>user research</SubHeading>
                <Heading>finding the right users-</Heading>
                <Description>
                In order to get better insights from the community, I went and asked around Metro Vancouver. Rather than focusing on one city which may skew the data, I extended my boundary to Richmond, New Westminster and Burnaby.
                </Description>
                <Description>
                    <ul>
                        <li>· Demographics - which result in no mobile payment at terminals</li>
                        <li>· Geographics - Very limited features offered on Compass site</li>
                        <li>· Some features redirect users to TransLink site</li>
                    </ul>
                </Description>

                <Spacer />
                
                <SubHeading>survey</SubHeading>
                <Heading>how popular are mobile payments among Canadians-</Heading>
                <Description>
                    I launched an online survey in the local community to get some insights. Survey data shows 50% of participants use mobile payment and the other 50% don't. Breaking down the data gathered, shows the younger generations are driving the increase of mobile payments, where as individuals above 40s are less likely to use mobile payments.
                </Description>
                <Description>
                    Younger generations find it more convenient with mobile payments in terms of accessibility and most importantly, they feel more comfortable to use their mobile for everyday tasks.
                </Description>

                <Spacer />
                
                <SubHeading>survey</SubHeading>
                <Heading>does the current site provide enough support-</Heading>
                <Description>
                     Survey data shows that 53% of participants feel unsure if the current site provide enough support to their needs, 29% say yes, and 18% say no Unsure individuals find the site useful to a certain extent but find it lacking certain features to meet their needs. Many also have wondered why isn't there a mobile app for TransLink Compass.
                </Description>
                
                <Spacer />
                
                <SubHeading>survey</SubHeading>
                <Heading>the must haves-</Heading>
                <Description>
                    I wanted to see what matters the most to the community so I asked what are the important features in a transit app. Surprisingly, the most important features are commonly used features: ability to check balances, reload card, check transit time schedule, card tap at terminals, and transit alerts/news. This pointed me the direction on which features to prioritize first.
                </Description>







                <Spacer />

                <SubHeading>indepth interviews</SubHeading>
                <Columns>
                    <Content>
                        <Heading>Fiona-</Heading>
                        
                        <Description>
                            “I transit everyday and using the website to do what I need is a hassle. It was only recently they made the site mobile friendly, but I still find it slow. Also, the machines at the stations are very dirty and line ups are usually long.”
                        </Description>
                    </Content>

                    <Content>
                    <Heading>Dave-</Heading>
                        <Description>
                            “ … sometimes you think North America has the latest tech, but when you look at Asia, Japan, they’ve been using mobile payments to tap way before the iPhone was even developed. Europe has been implementing ‘Express Transit’ technology, and here, we just have a website that does the bare minimum …”
                        </Description>
                    </Content>
                </Columns>

                

                

            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 4.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/applepay iso.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/coverimage-translink.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/overview iso.jpg")} />
            <ProjectNav />
        </CaseStudyCont>
    );
}

export default Translink;