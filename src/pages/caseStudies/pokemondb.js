import React from "react";
import { Container } from "../../components/globalStyles";
import { Description, Heading, SubHeading, Columns, Content, Spacer, Image } from "../../components/WorkCaseStudies/caseStyles";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";


const Pokemondb = () => {
    return (
        <CaseLayout>
            <Head title={"Pokémon Database"} />
            <Banner bannerImg={require("../../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")} />
            <Stats
                projectName={"Pokémon Database"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI + Dev"}
                tools={"Miro / Figma / Photoshop"}
                platform={"desktop website"}
                code={"PUG / CSS / JS / NodeJS / Bootstrap"}
                github={"https://github.com/kedison/pokemon-web-db"}
                demo={"https://pokemon-db-web.herokuapp.com/"}
            />

            <Container>
                <Heading>what is Pokémon Database-</Heading>
                <Description>
                    Pokémon Database is a website library that showcases Pokémon stats. This is a personal project that was created for educational purposes only and has no relations to the official Pokémon Franchise. For this project anyone can input a Pokémon stat card to the database or modify the details in the admin page. Each stat card contains an image, attack, defense, health points, element types and a short description of the Pokémon. Please be mindful of the information inputted. This database is not monitored and is hosted on Heroku platform live.
                </Description>

                <Spacer />

                <Heading>the challenge-</Heading>
                <Description>
                    I wanted to take this learning opportunity to create a website database that mimics the data of a Pokédex in Pokémon. Since each Pokémon has its own specific set of stats and there are a lot of Pokémon, this would provide the challenge for me to utilize NodeJS to create the backend library. In addition to create the library, I will also take on the challenge to allow users to access those data and make edits to it.
                </Description>

                <Spacer />

                <Heading>defining a feasible goal-</Heading>
                <Description>
                    <ul>
                        <li>· Create a backend library that saves users’ input data from the front end.</li>
                        <li>· Allow users to access the saved data from the front end and make edits or delete.</li>
                        <li>· Create a simple user interface where it is easy to use for users to input and edit data.</li>
                    </ul>
                </Description>

                <Spacer />

                <SubHeading>feature buckets</SubHeading>
                <Columns>
                    <Content>
                        <Heading>the must haves-</Heading>
                        <Description>
                            <ul>
                                <li>· Stat card must contain Pokémon image, attack, defense, health points, element types, official Pokémon number, and description.</li>
                                <li>· Live site to allow multiple users to add and make edits to the same library of data.</li>
                            </ul>
                        </Description>
                    </Content>

                    <Content>
                        <Heading>the nice to have-</Heading>
                        <Description>
                            <ul>
                                <li>· On the front end, sort data base on the official Pokémon number.</li>
                                <li>· On the front end admin page, sort data base on when the Pokémon was inputted.</li>
                                <li>· User to upload images or reference images from other sites.</li>
                                <li>· User to log in to input and edit their own data only.</li>
                            </ul>
                        </Description>
                    </Content>
                </Columns>

                <Spacer />

                <SubHeading>viewing the stat cards</SubHeading>
                <Image src={require("../../assets/case-studies/pokemondb/viewing_data.gif")} />
                <Description>
                    Viewing the data that has already been inputted is fairly simple. On the home page, you can see the data is sorted by the 'Pokémon Number.’ Hovering the row will highlight the data in table for that Pokémon. Select view to see more details of the Pokémon along with an image of the it.
                </Description>

                <Spacer />

                <SubHeading>adding data to the library</SubHeading>
                <Image src={require("../../assets/case-studies/pokemondb/adding_data.gif")} />
                <Description>
                    Adding Pokémon stat cards to the database is in real time. All data added is saved as it is being hosted on Heroku. This means data will be viewable by other users, so please mindful of what data is being inputted. Adding a Pokémon is fairly simple, head over to the 'Admin's page' and select 'create' button. Input the data of the Pokémon.
                </Description>

                <Spacer />

                <SubHeading>referencing image data</SubHeading>
                <Image src={require("../../assets/case-studies/pokemondb/adding_imagedata.gif")} />
                <Description>
                    Instead of uploading an image, users can reference an image instead. Users can search for an image in Google Image to find the image of the Pokémon. Then, right click and select 'copy image address.' Head back to the input modal and paste in the image reference input box. Once the user hits the create button, the Pokémon is viewable on both the home page and admin page. Latest inputted data will always be on the top row in the admin page. On home page, the inputted data is sorted by the Pokémon official number.
                </Description>

                <Spacer />

                <SubHeading>in summary</SubHeading>
                <Heading>reflection-</Heading>
                <Description>
                    I encountered a lot of challenges along the way, especially when trying to explore the idea of allowing users to create their own accounts and only access the data they have inputted. That will most likely be explored again in the future. Other notable hiccups were trying to save the data in its own ID and then pull it back up when the user wants to edit it and resave. Deleting the specific ID from the library was also challenging but I am glad I was able to learn so much along the way.
                </Description>
                <Description>
                    If I have more time, I would definitely explore the idea of allowing users to create their own accounts (user and password) then allow them to log in with the right credentials and load the data they have inputted. I suspect I will most likely get stuck on finding and matching the right credentials with the backend data. Further features I would consider are allowing the user to sort the data based on their likings such as a filter and maybe even allow users to leave comments on the stat cards and interact with other users.
                </Description>

                <Spacer />
            </Container>

            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokemon-header-image.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb02.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb08.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb09.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb03.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb04.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb05.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb06.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokedb07.png")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokemondb_macbook-pro-clay.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/pokemondb_mbp_Mockup.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")} />

            <ProjectNav />
        </CaseLayout>
    );
}

export default Pokemondb; 