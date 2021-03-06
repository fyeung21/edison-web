import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, SubHeading, Image, Spacer, TxtLink, TxtHighlight, TrioContent , TrioImgCont, Columns } from "../../components/WorkCaseStudies/caseStyles";
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
            <Banner bannerImg={require("../../assets/case-studies/netflix/netflix_ipadmockup.jpg")} />
            <Stats
                projectName={"Netflix"}
                projectTime={"on-going"}
                myRole={"Graphic, UX + UI"}
                tools={"Miro / Origami Studio / Figma / Illustrator / Photoshop"}
                platform={"Desktop and Mobile"}
                projectType={"personal"}
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
                    Ever since the 2020 pandemic struck the world unexpectedly, it has changed how consumers behave, whether its shopping, communicating with one another or commuting between places, it changed the way how companies understand its consumers. Companies are scrambling to find ways to continue their businesses, but things are changing so rapidly and it’s hard to predict where the pandemic is shifting the consumers to. One thing for sure is that people are spending more time at home as most companies allow their employees to work from home, majority of the borders between countries are closed, and consumers have less disposable income. 
                </Description>
                <Description>
                    Recently, it was reported that <TxtHighlight> Netflix no longer offers free trials for consumers as reported by <TxtLink href="https://www.independent.co.uk/life-style/gadgets-and-tech/netflix-free-trial-stop-us-uk-how-to-sign-up-b1033640.html" target="_blank"><span>Independent</span></TxtLink>, stating that they are looking for new ways to promote its platform</TxtHighlight> as the world is heavily shifting to online media consumption content due to the on-going pandemic. In this case study, I am going to take on the challenge to see how to tackle this and it to the next level.
                </Description>

                <Spacer />

                <SubHeading>approach</SubHeading>
                <Heading>defining the goals-</Heading>
                <Description>
                    <ul>
                        <li>· Business goal: Reintroduce the trial experience for non-subscription users and drive them to subscriptions</li>
                        <li>· User needs: Rethink how users connect with their love ones while accommodate the functionality of sharing within the business guidelines</li>
                    </ul>
                </Description>
                <Description>
                    <SubHeading>hypothesis</SubHeading>
                    <ul>
                        <li>· Users have the intention to watch movies/tv shows online with their loved ones (not in the same household) through online streaming services</li>
                        <li>· Users have to have the same streaming services to watch with each other, otherwise they are using screen share to watch together</li>
                        <li>· Existing paid subscribers are already sharing their accounts with family/non family members</li>
                        <li>· Business focus is to drive new paid subscriptions</li>
                    </ul>
                </Description>
                <Description>
                    <SubHeading>metrics and success indicators</SubHeading>
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

                <SubHeading>limitations</SubHeading>
                <Heading>scope and constraints-</Heading>
                <Description>
                    With the on-going pandemic and safety guidelines intact, there were some limitations that affected this project. First, I was <TxtHighlight>not able to gather data through observations as many users who signed up for interviews did not have the right set up.</TxtHighlight> This include some sort of stand to mount their phones/cameras so that I can observe how they connect and spend time with their loved ones, and to test out the prototype. Furthermore, <TxtHighlight>respondents did not feel comfortable to allow researchers film them.</TxtHighlight> However, I was able to meet up with a few respondents through Google Meet calls for a focus group and individual surveys. With screen sharing feature, I was able to carry out the surveys without any hassles. Also, it is worth mentioning that this study is not a full-scale project. I was unable to speak with a Netflix and legal representative to ensure the solution presented in this study is executable without any legal obstacles. But I have conducted the research to the best of my knowledge to work within the scope of the company's practices and the country it operates in.
                </Description>

                <Spacer />

                <SubHeading>research</SubHeading>
                <Heading>what's happening around the world-</Heading>
                
                <Description>
                    Over the past months, the pandemic has changed millions of consumers’ behavior. Researchers are seeing changes in wide range of sectors such as food, shopping, finance, and entertainment. Reported by <TxtLink href="https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-great-consumer-shift-ten-charts-that-show-how-us-shopping-behavior-is-changing" target="_blank"><span>McKindsey & Company</span></TxtLink>, consumers are heavily relying on online shopping for their purchases and are led majorly by millennials. There is also a rising trend in shift in brand loyalty, meaning consumers are switching brands at a higher rate than before as <TxtHighlight>people are more likely to try out different brands.</TxtHighlight> Reported by <TxtLink href="https://globalnews.ca/news/7200337/covid-19-investing-stock-market-canada/" target="_blank"><span>Wealthsimple and WealthBar</span></TxtLink>, investment trading is also trending up with more younger investors pouring money into the stock markets, again led by millennials.
                </Description>

                <Image src={require("../../assets/case-studies/netflix/research1.jpg")} />
                
                <Description>
                    In the entertainment sector, two researches done recently by <TxtLink href="https://www.nytimes.com/interactive/2020/04/07/technology/coronavirus-internet-use.html" target="_blank"><span>The New York Times</span></TxtLink> and <TxtLink href="https://www.bbc.com/news/entertainment-arts-53637305" target="_blank"><span>Ofcom</span></TxtLink>, illustrate that <TxtHighlight>people are spending even more time on streaming services (Netflix, YouTube, Disney+, Hulu ...), with more than double the amount of what was recorded prior to the pandemic.</TxtHighlight> The reports also indicate people are turning towards video chats to connect with each other, whether it’s for work or personal use. 
                </Description>
                <Description>
                    So what does all this mean? With these researches, we can conclude that <TxtHighlight>consumers are changing their habits at an exponential rate. Data collected prior to the pandemic or early stages of the pandemic may not be relevant anymore.</TxtHighlight> The data shows that <TxtHighlight>people are constantly finding new ways to spend their time and ways to connect with each other with trends mostly driven by the millennials.</TxtHighlight> Companies need to constantly research on its target users and predict where the shift is heading towards. In a case like this for Netflix, how can a streaming service provide that next level service to its current and potential subscription users? 
                </Description>
                
                <Spacer />

                <SubHeading>findings</SubHeading>
                <Heading>surveys / interviews / focus group-</Heading>
                <Description>
                    Launched an online survey and had over 150+ respondents. Out of the batch of respondents, I was able interview 5 individuals with 5 others for a focus group. Both interviews and focus group were held online with Google Meet and tools with Whiteboard, Jamboard and Miro. 
                </Description>
                <Columns>
                    <TrioContent>
                        <TrioImgCont>
                            <Image src={require("../../assets/case-studies/netflix/finding1.jpg")} />
                        </TrioImgCont>
                        <Description>
                            93% of users have access to one or multiple online streaming services such as Netflix, Disney+, Hulu, Amazon Prime Video … but 72% of those users do not own more than one streaming services. <TxtHighlight>This means those 72% of users are not able to use the ‘watch party’ feature offered by the streaming services.</TxtHighlight>
                        </Description>
                    </TrioContent>

                    <TrioContent>
                        <TrioImgCont>
                            <Image src={require("../../assets/case-studies/netflix/finding2.jpg")} />
                        </TrioImgCont>
                        <Description>
                            79% of the users are using some sort of video or call conference to connect and spend time with their loved ones as most of them actually do not live with their families and friends due to work or personal choices. That said, they find themselves even more reliant on their families and friends during the pandemic. <TxtHighlight>This shows majority of the users are relying on online interactions to stay connected as social distancing and lockdowns are in place.</TxtHighlight>
                        </Description>
                    </TrioContent>

                    <TrioContent>
                        <TrioImgCont>
                            <Image src={require("../../assets/case-studies/netflix/finding3.jpg")} />
                        </TrioImgCont>
                        <Description>
                            69% of users struggled to find a solution to watch movies and shows with their loved ones together. Currently, some users are using video chat platforms such as Google Meet, Zoom, Discord and others to screen share and voice chat with each other. <TxtHighlight>This demonstrates users are seeking for solutions and there is a demand for it.</TxtHighlight>
                        </Description>
                    </TrioContent>
                </Columns>

                <Spacer />

                <Heading>competitive analysis</Heading>
                <Image src={require("../../assets/case-studies/netflix/netflix_competi_an.jpg")} />
                <Description>
                    Based on the primary and secondary research, by comparing the top online streaming services, <TxtHighlight>only Netflix is not offering any free trial to its non-subscription users.</TxtHighlight> I also found that people are using video chat platforms to watch movies and shows together. The disadvantages with this method comes with loss in video and audio quality, audio out of sync, and hassle of syncing playtime. Interestingly, out of all these streaming services, <TxtHighlight>only Disney+ and Hulu are offering a built-in solution to allow its paid subscribers to watch together with the ‘Watch Party’ feature.</TxtHighlight> The downside to this is only accessible to those who have access to the same streaming services with the same or higher-level tier accounts.
                </Description>
                <Description>
                    I also found out users are using third party solutions for free with browser extensions such as, Netflix Party (Teleparty), Metastream Remote and many more. These browser extensions allow users to watch together with up to 50 participants and only the host need to have access to the streaming service. However, many of the <TxtHighlight>users I interviewed ranked security and privacy as their top concerns. Many of these extensions require access to view the users’ browsing history and/or view and access their web page contents.</TxtHighlight> 
                </Description>

                <Spacer />

                <SubHeading>solution process</SubHeading>
                <Heading>site map</Heading>
                <Image src={require("../../assets/case-studies/netflix/netflix_site_map.jpg")} />
 
                <Spacer />

                <Heading>paid subscribers CJM</Heading>
                <Image src={require("../../assets/case-studies/netflix/netflix_paidsub_cjm.jpg")} />
 
                <Spacer />
                
                <Heading>non-subscribers CJM</Heading>
                <Image src={require("../../assets/case-studies/netflix/netflix_freeuser_cjm.jpg")} />

                <Spacer />

                <Heading>user story map / MoSCoW / t-shirt estimation model</Heading>
                <Image src={require("../../assets/case-studies/netflix/netflix_usm_m_tsh.jpg")} />

                <Spacer />

                <Description>
                    project in progress . . .
                </Description>

            </Container>
            <ProjectNav />
        </CaseLayout>
    );
}

export default Netflix;