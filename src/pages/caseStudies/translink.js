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
                <Heading>Project Focus</Heading>
                <SubHeading>Sub-heading</SubHeading>
                <Description>
                    A project that focuses on creating a backend database with NodeJS. This is a demo of
                    creating a Pokemon Pokedex that holds true data input from users in real time. Anyone
                    can add Pokemon to the database or modify the details in the admin page. Note that this
                    is a personal project for educational purposes and has no relations to the official
                    Pokemon Franchise. Please also be mindful of the information inputted. This database is
                    not monitored and is hosted on Heroku platform live.
                </Description>
                <Description>
                    A project that focuses on creating a backend database with NodeJS. This is a demo of
                    creating a Pokemon Pokedex that holds true data input from users in real time. Anyone
                    can add Pokemon to the database or modify the details in the admin page. Note that this
                    is a personal project for educational purposes and has no relations to the official
                    Pokemon Franchise. Please also be mindful of the information inputted. This database is
                    not monitored and is hosted on Heroku platform live.
                </Description>

                <Spacer />

                <Heading>Project Focus</Heading>
                <Columns>
                    <Content>
                        <SubHeading>Sub-heading</SubHeading>
                        <Description>
                            A project that focuses on creating a backend database with NodeJS. This is a demo of
                            creating a Pokemon Pokedex that holds true data input from users in real time. Anyone
                            can add Pokemon to the database or modify the details in the admin page. Note that this
                            is a personal project for educational purposes and has no relations to the official
                            Pokemon Franchise. Please also be mindful of the information inputted. This database is
                            not monitored and is hosted on Heroku platform live.
                        </Description>
                    </Content>

                    <Content>
                        <SubHeading>Sub-heading</SubHeading>
                        <Description>
                            A project that focuses on creating a backend database with NodeJS. This is a demo of
                            creating a Pokemon Pokedex that holds true data input from users in real time. Anyone
                            can add Pokemon to the database or modify the details in the admin page. Note that this
                            is a personal project for educational purposes and has no relations to the official
                            Pokemon Franchise. Please also be mindful of the information inputted. This database is
                            not monitored and is hosted on Heroku platform live.
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <Heading>Project Focus</Heading>
                <SubHeading>Sub-heading</SubHeading>
                <Description>
                    A project that focuses on creating a backend database with NodeJS. This is a demo of
                    creating a Pokemon Pokedex that holds true data input from users in real time. Anyone
                    can add Pokemon to the database or modify the details in the admin page. Note that this
                    is a personal project for educational purposes and has no relations to the official
                    Pokemon Franchise. Please also be mindful of the information inputted. This database is
                    not monitored and is hosted on Heroku platform live.
                </Description>
            </Container>

            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseStudyCont>
    );
}

export default Translink;