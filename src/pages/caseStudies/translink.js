import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, SubHeading, Columns, Content, Spacer, Image, TrioContent, TrioImgCont } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Translink = () => {
    return (
        <CaseLayout>
            <Banner bannerImg={require("../../assets/case-studies/translink/coverimage-translink.jpg")} />
            <Stats
                projectName={"TransLink Compass"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DAD_qKZLh2w/view?utm_content=DAD_qKZLh2w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}
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

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 2.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>card tap-</Heading>

                        <Description>
                            <ul>
                                <li>1) During the card tapping process, there will be a pulse animation at the back of the card as well as a haptic feedback, stretching to 3/4 of the screen. This will give the user more visual and psychical clue. Once tap is successful, it will have a pop up with a 'check mark' along with a firm haptic feedback and the word 'success' at the top. A short sound and animation of the fee ducted will be played/shown. In addition, app will also send a notification to the user of the fee deducted, transaction date and time, total balance, and card name.</li>
                                <br></br>
                                <li>2) If the tap was unsuccessful, the top will show 'failed' with an 'X' icon and a short description stating why it failed.</li>
                                <br></br>
                                <li>3) Other cards will be collapsed further to make more room for the content above, allowing more white space for user to focus on the main information. Cards are colour coded in respective to their categories of: adult, concession, contractors, CNIB, and employees.</li>
                            </ul>
                        </Description>
                    </Content>

                </Columns>

                <Spacer />

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 3.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>card details-</Heading>

                        <Description>
                            <ul>
                                <li>1) When the user selects more icon on the top right, user can access further information of the card. Here the user can manage the card's details, purchase of passes and programs.</li>
                                <br></br>
                                <li>2) The user will also have access to the card's history of transactions. Swiping left on the transaction; user can choose to report unrecognized transactions.</li>
                                <br></br>
                                <li>3) Further features can be accessed but clicking the more button. Hidden here will be more sensitive and less used features, such as managing auto-reload, request for physical card, report lost or stolen, and remove card from the account.</li>
                            </ul>
                        </Description>
                    </Content>

                </Columns>

                <Spacer />

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 4.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>adding funds & cards-</Heading>

                        <Description>
                            <ul>
                                <li>1) Within the card details panel, the user can add funds to the Compass card. A pop up will be shown to request for more details from the user. By default, the system will select the compass card that has already been selected, but user can change to add funds to another Compass card.</li>
                                <br></br>
                                <li>2) ) The user can also select which payment to use: credit cards and Apple Pay. If the user did not set up a payment method, user can create one by selecting add new card. A new page will be shown for the user to add the payment info.</li>
                                <br></br>
                                <li>3) In addition, if the user does not have a Compass card added, the user can add and purchase new Compass cards. This is to generate new Compass card numbers.</li>
                            </ul>
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 5.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>transit map-</Heading>

                        <Description>
                            <ul>
                                <li>1) Each bus station will show a specific bus route color. This allows the user to see which bus goes where across the map.</li>
                                <br></br>
                                <li>2) The tiny info box provides next on-coming bus schedule without the user to click in.</li>
                                <br></br>
                                <li>3) Once the user clicks the station, it will only show the bus routes for that selected station as each station has more than one bus.</li>
                                <br></br>
                                <li>4) Furthermore, user will get a pull-able card with more detailed information and features for the selected bus station.</li>
                            </ul>
                        </Description>
                    </Content>

                </Columns>

                <Spacer />

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 6.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>transit tools-</Heading>

                        <Description>
                            <ul>
                                <li>1) Further sub-features are labelled at the top in which the user can scroll left to access.</li>
                                <br></br>
                                <li>2) Each bus will have its own description in showing the ETA, scheduled time, next stop, occupancy level, and alerts.</li>
                                <br></br>
                                <li>3) Further down will show the bus station schedule for all buses, fare pricing, and photos of the station.</li>
                                <br></br>
                                <li>4) Tracking is a feature where the user can track a specific bus at the selected bus station. Here the user can select the timeframe of when the tracking should start and stop.</li>
                                <br></br>
                                <li>5) User then can select the buses s/he wants to track.</li>
                                <br></br>
                                <li>6) User then select how the information should be delivered to him/her. The user can make select multiple selections.</li>
                            </ul>
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <Columns>
                    <Content>
                        <Image src={require("../../assets/case-studies/translink/feature 7.png")} />
                    </Content>
                    <Content>
                        <SubHeading>solution</SubHeading>
                        <Heading>home & Apple Pay-</Heading>

                        <Description>
                            <ul>
                                <li>1) There is also a 'home' tab that will store all the other basic information. At the top, it will show the featured article.</li>
                                <br></br>
                                <li>2) Other information includes city wide transit alerts, news, pricing, fare estimator, FAQ, and contacting TransLink.</li>
                                <br></br>
                                <li>3) The app will also allow user to add it to Apple Pay for faster access. Depending on Apple Pay's limitation, user may only be able to add one Compass card to Apple Pay.</li>
                            </ul>
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <SubHeading>in summary</SubHeading>
                <Heading>reflection-</Heading>
                <Description>
                    It was an amazing challenge to finish a project this size in such a short period of time. I have learned a lot and understand how valuable it is to work in teams to tackle a project this size. Solving problems along the way was very rewarding. I learned a lot about why and how users use their apps, and why even big companies are constantly updating their apps to solve problems. During the research phase, survey and in-depth interviews really gave me a lot of insights that I would have never be able to find on the internet.
                </Description>
                <Description>
                    What worked:
                    <ul>
                        <li>· Using the default card as the main landing screen, users were very pleased and commented on how efficient it would be on-the-go when using the app.</li>
                        <li>· Users absolutely appreciated when I told them during the card tapping process there will be a pulse like effect with haptic feedback. These visual and haptic feedback provide a sense confirmation response to the user without the need to read.</li>
                    </ul>
                </Description>
                <Description>
                    What didn't work:
                    <ul>
                        <li>· Initially I had the cards displayed horizontally but later after user testing, users did not find it comfortable when holding the phone one-handed. Changing to vertical card display, I was able to maintain to display more information while allowing the users to hold the phone comfortably one handed.</li>
                        <li>· Initially I had the navigation bar present on all screens. After user testing, I found out majority of the users find it distracting, especially when they are focusing on an important task such as adding funds or dealing with sensitive information. Users would like crucial screens to have unnecessary information removed.</li>
                    </ul>
                </Description>
                <Description>
                    What to improve:
                    <ul>
                        <li>· Spend more time on user research and do more in-depth interviews for further insights.</li>
                        <li>· Add animation for a better prototype experience.</li>
                        <li>· Explore more features.</li>
                        <li>· User test with a wider range of audiences.</li>
                        <li>· Fine tune details.</li>
                    </ul>
                </Description>

            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 4.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 5.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 6.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 7.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/cardovp 8.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/applepay iso.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/coverimage-translink.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/translink/overview iso.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Translink;