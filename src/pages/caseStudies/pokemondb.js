import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import Description from "../../components/WorkCaseStudies/Description";

const Pokemondb = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
            />
            <Stats
                projectName={"Pokemon Database"}
                projectTime={"2.0 weeks"}
                myRole={"UX + UI + Dev"}
                tools={"PUG / CSS / JS / NodeJS / Bootstrap / Miro / Figma / Photoshop"}
                platform={"Desktop Website"}
                presentation={"https://pokemon-db-web.herokuapp.com/"}
            />
            <Description
                description={"A project that focuses on creating a backend database with NodeJS. This is a demo of creating a Pokemon Pokedex that holds true data input from users in real time. Anyone can add Pokemon to the database or modify the details in the admin page. Note that this is a personal project for educational purposes and has no relations to the official Pokemon Franchise. Please also be mindful of the information inputted. This database is not monitored and is hosted on Heroku platform live."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <Description
                description={"Viewing the data that has already been inputted is fairly simple. On the home page, you can see the data is sorted by the 'Pokemon Number' on the left. Hovering the row will highlight the data in table for that Pokemon. Select view to see more details of the Pokemon along with an image of the Pokemon."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <Description
                description={"As mentioned, adding Pokemon to the database is in real time. All data added is saved as it is being hosted on Heroku. This means data will be viewable by other users, so please mindful of what data is being inputted. Adding a Pokemon is fairly simple, head over to the 'Admin's page' and select 'create' button. Input the data of the Pokemon."}
            />
        </CaseStudyCont>
    );
}

export default Pokemondb;