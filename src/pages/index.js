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
                    title={"Experimental Designs"}
                    description={"Design concepts and studies"}
                    img={require("../assets/case-studies/concepts/edison_bcard_mockup01.jpg")}
                    link={"/work/concepts"}
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
                    title={"feed+"}
                    description={"A solution for a common first world problem: the existence of multiple social media accounts"}
                    img={require("../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                    link={"/work/feedplus"}
                />
                <Tall
                    title={"Coop-radio"}
                    description={"A landing website for artists featured on Vancouver Coop Radio"}
                    img={require("../assets/case-studies/coopradio/coverimage-coopradio.jpg")}
                    link={"/work/coopradio"}
                />
                <Tall
                    title={"Genomic Science"}
                    description={"An educational mobile app that links existing desktop data into mobile"}
                    img={require("../assets/case-studies/genomic/coverimage-genomic.jpg")}
                    link={"/work/genomic"}
                />
                {/* <Wide
                    title={"E-Commerce Retail"}
                    description={"Combining local retail shops on West Van to design a one stop shop e-commerce experience"}
                    img={require("../assets/case-studies/ecommerce/coverimage-ecommerce.jpg")}
                    link={"/work/ecommerce"}
                /> */}
                {/* <Wide
                    title={"Space Battle Ex Mobile Game"}
                    description={"A space themed revision of a retro game called Puzzle Bobble"}
                    img={require("../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")}
                    link={"/work/spacebattle"}
                /> */}
                <Wide
                    title={"Skyrocket Digital"}
                    description={"NDA"}
                    img={require("../assets/case-studies/coverimage-skyrocket.jpg")}
                />
                <Wide 
                    title={"FF Autoworks"}
                    description={"Coming soon - Brand Identity with logo, website, t-shirt, brochure designs"}
                    img={require("../assets/case-studies/coverimage-ffautoworks.jpg")}
                />

            </WorkCont>
        </MainCont>
    );
}

export default Home;