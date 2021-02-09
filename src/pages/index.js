import React from "react";
import { MainCont } from "../components/globalStyles";
import { WorkCont } from "../components/Work/workStyles";
import Head from "../components/Head/Head";
// import ReturnTop from "../components/ReturnTop/ReturnTop";
import Hero from '../components/Hero/Hero';
import Tall from "../components/Work/Tall";
import Wide from "../components/Work/Wide";


const Home = () => {
    return (
        <MainCont>
            <Head title={"Design"} />
            {/* <ReturnTop /> */}
            <Hero />
            <WorkCont>
                <Wide
                    title="TransLink Compass"
                    description={"UX/UI: A concept project providing an on-the-go solution for an essential city service"}
                    img={require("../assets/case-studies/translink/coverimage-translink.jpg")}
                    link={"/work/translink"}
                />
                <Tall
                    title={"Netflix"}
                    description={"UX/UI: Improving the streaming service experience with the on-going global pandemic"}
                    img={require("../assets/case-studies/netflix/netflix_logo.jpg")}
                    link={"/work/netflix"}
                />
                <Tall
                    title={"AssistList Association"}
                    description={"UX/UI: A charity design revamp that focuses on user experience and interface"}
                    img={require("../assets/case-studies/assistlist/coverimage-assistlist.jpg")}
                    link={"/work/assistlist"}
                />
                <Wide
                    title={"feed+"}
                    description={"UX/UI: A solution for a common first world problem: the existence of multiple social media accounts"}
                    img={require("../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                    link={"/work/feedplus"}
                />
                <Wide 
                    title={"FF Autoworks"}
                    description={"BRANDING: In Progress - Brand Identity with logo, website, t-shirt, brochure designs"}
                    img={require("../assets/case-studies/ffautoworks/brochure-mockup.jpg")}
                    link={"/work/ffautoworks"}
                />  
                <Tall
                    title={"Pokedex Database"}
                    description={"BACKEND DATABASE: A database project built with NodeJS and Bootstrap"}
                    img={require("../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
                    link={"/work/pokemondb"}
                />
                
                {/* <Tall
                    title={"Genomic Science"}
                    description={"UX/UI: An educational mobile app that links existing desktop data into mobile"}
                    img={require("../assets/case-studies/genomic/coverimage-genomic.jpg")}
                    link={"/work/genomic"}
                />
                <Wide
                    title={"Skyrocket Digital"}
                    description={"UX/UI: NDA"}
                    img={require("../assets/case-studies/coverimage-skyrocket.jpg")}
                /> */}
            </WorkCont>
        </MainCont>
    );
}

export default Home;