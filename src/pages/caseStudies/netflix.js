import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, SubHeading, Columns, Content, Spacer, Image, TrioContent, TrioImgCont } from "../../components/WorkCaseStudies/caseStyles";
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
                    TransLink is a transportation network that operates in Metro Vancouver. Compass is a contactless payment system that is owned by TransLink. It was first launched in 2013 as beta and went public in 2015. It allows users to store money onto a physical card and pay fare fees to move around the city by bus, skytrain or seabus.
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

                <Spacer />

                <SubHeading>domain research</SubHeading>
                <Heading>what's happening in the community-</Heading>
                <Description>
                    Metro Vancouver has the highest per capita transit ridership to work compared to a number of major cities in North America. In addition, TransLink data shows exponential annual grow of ridership across all transit platforms (Bus, Skytrain, and Seabus). The Canadian Payment Methods and Trends in 2018 research data shows contactless payment is on the rise and increasing year after year, especially in the mobile sector.
                </Description>
                <Description>
                    What does it mean? Data shows there is a huge market for mobile contactless payment and the trend is moving towards it. Many companies are jumping onboard with mobile payment systems because the demand is there.
                </Description>

                <Spacer />

                <SubHeading>current pain points</SubHeading>
                <Heading>website audit-</Heading>
                <Description>
                    <ul>
                        <li>· No mobile app for TransLink or Compass, which also means no mobile payment at terminals.</li>
                        <li>· Very limited features offered on Compass site, purchasing card, reloading card, and checking card balance only.</li>
                        <li>· Some features redirect users to TransLink site which is separate from the Compass site.</li>
                    </ul>
                </Description>

                <Spacer />

                <SubHeading>user research</SubHeading>
                <Heading>finding the right users-</Heading>
                <Description>
                    In order to find the right users and get a better understanding of how daily commuters’ transit in the city I went to gather data across Metro Vancouver which includes Vancouver, Richmond and Burnaby. I divided the research into three parts: on-site survey, online survey and in-depth interview. In addition, segmenting the users into different categories provide me a wider range of responses, this way the data will not be skewed towards one type of users.
                </Description>
                <Description>
                    <ul>
                        <li>· Demographic</li>
                        <li>· Geographic</li>
                        <li>· Psychographic</li>
                    </ul>
                </Description>

                <Spacer />

                <SubHeading>survey</SubHeading>
                <Heading>how popular are mobile payments among Canadians-</Heading>
                <Description>
                    I launched an online survey to reach out to the local community to get some further insights. With around 78 individuals participated, the data shows 68% of participants use mobile payment and the other 32% don't. Breaking down the data gathered, shows the younger generations are driving the increase of mobile payments, where as individuals above 40 are less likely to use mobile payments. This is because the younger generations find it more convenient with mobile payments in terms of accessibility and most importantly, they feel more comfortable to use their mobile to complete their everyday tasks and older individuals don’t.
                </Description>

                <Spacer />

                <SubHeading>survey</SubHeading>
                <Heading>does the current site provide enough support-</Heading>
                <Description>
                    From the same survey, the data shows that 53% of participants feel unsure if the current site provide enough address to their needs, 29% say yes, and 18% say no. The unsure individuals find the site useful to a certain extent but find it lacking certain features to meet their needs, such as a mobile app.
                </Description>
                <Description>
                    Websites are only accessible within the browser app which sometimes people find it a hassle. In addition, websites tend to load data slower and may not be properly designed for mobile, whereas mobile app is.
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


                <Spacer />

                <SubHeading>indepth interviews</SubHeading>
                <Columns>
                    <Content>
                        <Heading>what users like about the current site-</Heading>
                        <Description>
                            <ul>
                                <li>· Simple to reload the Compass Card</li>
                                <li>· Ease of use without logging in to check card balance</li>
                                <li>· One account to manage multiple cards</li>
                                <li>· View real time charge history</li>
                                <li>· Straight forward user interface</li>
                            </ul>
                        </Description>
                    </Content>

                    <Content>
                        <Heading>what users dislike in a mobile app-</Heading>
                        <Description>
                            <ul>
                                <li>· Ads that affect user experience</li>
                                <li>· No option to add card to Apple Wallet</li>
                                <li>· Requiring more than a click to tap card</li>
                                <li>· Double verification</li>
                                <li>· Complicated user interface</li>
                            </ul>
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <SubHeading>feature buckets</SubHeading>
                <Columns>
                    <Content>
                        <Heading>must have-</Heading>

                        <Description>
                            Using the feature buckets model, I wanted to understand what matters the most in a mobile app from the users’ point of view. Surprisingly, the most important features are commonly used features such as the ability to check balances, reload card, check transit time schedule, card tap at terminals, and transit alerts/news.
                        </Description>
                        <br></br>
                        <br></br>
                        <Heading>nice to have-</Heading>

                        <Description>
                            Aside from the must haves, the participants found balance notification after tapping, balance transfer, transit alert and card sharing to be nice to have but not categorized as a necessity. This valuable information later helps me prioritize the features, also known as the MVP prioritization matrix.
                        </Description>
                    </Content>

                    <Content>
                        <Image src={require("../../assets/case-studies/translink/musthave chart.jpg")} />
                    </Content>
                </Columns>

                <Spacer />

                <SubHeading>competitive research</SubHeading>
                <Heading>mobile applications-</Heading>
                <Description>
                    Since TransLink is the monopoly player in the Metro Vancouver, there are no competitors or any similar companies that offer the same service. To understand more on how data is presented, I went to research and analyze apps that offer similar features.
                </Description>
                <Description>
                    <ul>
                        <li>· Transactions- TD Bank, Scotiabank, BMO</li>
                        <li>· Maps- Google Map, Apple Map, Yelp</li>
                        <li>· Mobile payment- Apple Pay, Google Pay, Stocard</li>
                        <li>· Payment reload- Starbucks, Tim Hortons, McDonalds</li>
                        <li>· Card sharing- Stocard</li>
                    </ul>
                </Description>

                <Spacer />

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/persona.png")} />
                    </Content>
                    <Content>
                        <SubHeading>persona</SubHeading>
                        <Heading>meet Haley-</Heading>

                        <Description>
                            Age 30, Haley is a web developer in downtown and resides locally in West Vancouver. She is a daily commuter because it’s cheaper than owning a car and more convenient. Most importantly she uses her iPhone and Macbook Pro a lot to accomplish her daily tasks.
                        </Description>

                        <Description>
                            Her Frustrations, she loses her transit card quite often, as she often feels uncomfortable in pulling out her wallet to make purchases. Most of the time she is late for work because of her poor transit planning.
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <SubHeading>user scenario</SubHeading>
                <Heading>Haley's routine-</Heading>
                <Columns>

                    <TrioContent>
                        <TrioImgCont>
                            <Image src={require("../../assets/case-studies/translink/userscenario 1.png")} />
                        </TrioImgCont>
                        <Description>
                            In the morning, as Haley gets up to make her breakfast, she launches the Compass app and set Tracking alert for her bus (401) for the near by bus stop to her house. This will periodically send notifications to her phone as when the next 401 bus will come so Haley can plan her morning better and not miss the bus.
                        </Description>
                    </TrioContent>


                    <TrioContent>
                        <TrioImgCont>
                            <Image src={require("../../assets/case-studies/translink/userscenario 2.png")} />
                        </TrioImgCont>

                        <Description>
                            As Haley was waiting for her bus, she was clicking away on her phone and holding her coffee with her other hand. When the bus came, Haley launches the Compass app. Without a click, the app verifies Haley with FaceID and she holds the phone near the reader to get onboard. Haley resumes to her social tasks without pulling her wallet out or putting her coffee down.
                        </Description>
                    </TrioContent>


                    <TrioContent>
                        <TrioImgCont>
                            <Image src={require("../../assets/case-studies/translink/userscenario 3.png")} />
                        </TrioImgCont>

                        <Description>
                            As Haley is almost off, she launches the Compass app to set Tracking for her bus to go home. Upon setting the Tracking, she realize her husband's card was low on funds, she quickly added some funds to his card without the need of logging out the app.
                        </Description>
                    </TrioContent>

                </Columns>

                <Spacer />

                <SubHeading>user stories</SubHeading>
                <Heading>as a 'blank'-</Heading>
                <Description>
                    <ul>
                        <li>· As a student who transits daily, I don’t want to constantly check the arrival time of my buses so that I can focus on what matters to me the most.</li>
                        <li>· As a mother of three who manages the family’s financials, I want to manage my family’s transit cards on-the-go as well so that I have more time to take care of other financials.</li>
                        <li>· As a regular jogger in the morning, I want my phone to do everything so that I can carry one less thing (my wallet).</li>
                    </ul>
                </Description>

                <Spacer />

                <SubHeading>redefining the scope</SubHeading>
                <Heading>mvp prioritization matrix-</Heading>
                <Description>
                    Tackling all the points and features at once is not the most strategic method to approach this project. Instead, using the MVP prioritization matrix, I have divided the features into four categories as this will help me identify which task I should focus first:
                </Description>
                <Description>
                    <ul>
                        <li>· Major- Mobile payment, Payment reload, Payment history, Balances, Transit alert, Transit schedule, Transit Tracking</li>
                        <li>· Fill-ins- Sign up, News, Account</li>
                        <li>· Quick wins- Maps, Balance notification</li>
                        <li>· Reconsider- Card sharing, Balance transfer</li>
                    </ul>
                </Description>

                <Spacer />

                <SubHeading>user journey map</SubHeading>
                <Image src={require("../../assets/case-studies/translink/journey map.jpg")} />

                <Spacer />

                <SubHeading>information architecture</SubHeading>
                <Image src={require("../../assets/case-studies/translink/app information arc.jpg")} />

                <Spacer />

                <SubHeading>user flow</SubHeading>
                <Image src={require("../../assets/case-studies/translink/userflow.png")} />
                <Spacer />
                <Image src={require("../../assets/case-studies/translink/userflow2.png")} />

                <Spacer />


                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 1.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>ready to go-</Heading>

                        <Description>
                            <ul>
                                <li>1) If the user has already gotten the account set-up with a card inputted, the next time the app is launched, it will go directly to the card tap screen with the default card selected. This will make a more seamless experience of ready-to-go for the user.</li>
                                <br></br>
                                <li>2) The default card is set by the account holder and can be changed. Selected card will show the card name and balance.</li>
                                <br></br>
                                <li>3) In addition, the app will be ready to verify the user once the app is launched. Once verified, the user can start tapping at terminals.</li>
                                <br></br>
                                <li>4) If the user decides to use other cards or manage other cards, s/he can select them at the bottom or swipe up to see the expanded view of all the cards under the main account.</li>
                            </ul>
                        </Description>
                    </Content>

                </Columns>

                <Spacer />

    
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 4.jpg")} />
  
            <ProjectNav />
        </CaseLayout>
    );
}

export default Netflix;