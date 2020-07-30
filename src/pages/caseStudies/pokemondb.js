import React from "react";
import { CaseStudyCont, Description } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";

const Pokemondb = () => {
    return (
        <CaseStudyCont>
            <Banner bannerImg={require("../../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")} />
            <Stats
                projectName={"Pokemon Database"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI + Dev"}
                tools={"Miro / Figma / Photoshop"}
                platform={"desktop website"}
                code={"PUG / CSS / JS / NodeJS / Bootstrap"}
                github={"https://github.com/kedison/pokemon-web-db"}
                demo={"https://pokemon-db-web.herokuapp.com/"}
            />
            <Description>
                A project that focuses on creating a backend database with NodeJS. This is a demo of
                creating a Pokemon Pokedex that holds true data input from users in real time. Anyone
                can add Pokemon to the database or modify the details in the admin page. Note that this
                is a personal project for educational purposes and has no relations to the official
                Pokemon Franchise. Please also be mindful of the information inputted. This database is
                not monitored and is hosted on Heroku platform live.
            </Description>

            <Description>
                Viewing the data that has already been inputted is fairly simple. On the home page, you can
                see the data is sorted by the 'Pokemon Number' on the left. Hovering the row will highlight
                the data in table for that Pokemon. Select view to see more details of the Pokemon along
                with an image of the Pokemon.
            </Description>

            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />

            <Description>
                As mentioned, adding Pokemon to the database is in real time. All data added is saved as it
                is being hosted on Heroku. This means data will be viewable by other users, so please mindful
                of what data is being inputted. Adding a Pokemon is fairly simple, head over to the 'Admin's
                page' and select 'create' button. Input the data of the Pokemon.
            </Description>
            <Description>
                As mentioned, adding Pokemon to the database is in real time. All data added is saved as it
                is being hosted on Heroku. This means data will be viewable by other users, so please mindful
                of what data is being inputted. Adding a Pokemon is fairly simple, head over to the 'Admin's
                page' and select 'create' button. Input the data of the Pokemon.
            </Description>

            <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
            <ProjectNav />
        </CaseStudyCont>
    );
}

export default Pokemondb;