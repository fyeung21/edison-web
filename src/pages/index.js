import React from "react";
import { MainCont } from "../components/globalStyles";
import { WorkCont } from "../components/Work/workStyles";
import Head from "../components/Head/Head";
import ReturnTop from "../components/ReturnTop/ReturnTop";
import Hero from '../components/Hero/Hero';
import Tall from "../components/Work/Tall";
import Wide from "../components/Work/Wide";


const Home = () => {
    return (
        <MainCont>
            <Head title={"Design"} />
            <ReturnTop />
            <Hero />
            <WorkCont>
                <Wide
                    title="TransLink Compass"
                    description={"A concept project providing an on-the-go solution for an essential city service"}
                    img={require("../assets/case-studies/translink/coverimage-translink.jpg")}
                    link={"/work/translink"}
                />
                <Tall
                    title={"feed+"}
                    description={"A solution for a common first world problem: the existence of multiple social media accounts"}
                    img={require("../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                    link={"/work/feedplus"}
                />
                <Tall
                    title={"Pokedex Database"}
                    description={"A database project built with NodeJS and Bootstrap"}
                    img={require("../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
                    link={"/work/pokemondb"}
                />
                <Wide
                    title={"AssistList"}
                    description={"A charity design revamp that focuses on user experience and interface"}
                    img={require("../assets/case-studies/assistlist/coverimage-assistlist.jpg")}
                    link={"/work/assistlist"}
                />
                <Wide
                    title={"Genomic Science"}
                    description={"An educational mobile app that links existing desktop data into mobile"}
                    img={require("../assets/case-studies/genomic/coverimage-genomic.jpg")}
                    link={"/work/genomic"}
                />
                <Tall
                    title={"Skyrocket Digital"}
                    description={"NDA"}
                    img={require("../assets/case-studies/coverimage-skyrocket.jpg")}
                />
                <Tall 
                    title={"FF Autoworks"}
                    description={"Coming soon - Brand Identity with logo, website, t-shirt, brochure designs"}
                    img={require("../assets/case-studies/coverimage-ffautoworks.jpg")}
                />
                {/* <Tall
                    title={"Experimental Designs"}
                    description={"Design concepts and studies"}
                    img={require("../assets/case-studies/concepts/edison_bcard_mockup01.jpg")}
                    link={"/work/concepts"}
                /> */}
            </WorkCont>
        </MainCont>
    );
}

export default Home;