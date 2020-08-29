import React from "react";
import { MainCont } from "../components/globalStyles";
import { WorkCont } from "../components/Work/workStyles";
import Wide from "../components/Work/Wide";
import Tall from "../components/Work/Tall";
import NoLinkTall from "../components/Work/NoLinkTall";
import NoLinkWide from "../components/Work/NoLinkWide";

const Work = () => {
    return (
        <MainCont>
            <WorkCont>
                <Wide
                    title={"Assist List"}
                    description={"A database project built with NodeJS and Bootstrap"}
                    img={require("../assets/case-studies/assistlist/coverimage-assistlist.jpg")}
                    link={"/work/assistlist"}
                />
                <Tall
                    title="TransLink Compass"
                    description={"A concept project providing an on-the-go solution for an essential city service."}
                    img={require("../assets/case-studies/translink/coverimage-translink.jpg")}
                    link={"/work/translink"}
                />
                <Wide
                    title={"Pokedex Database"}
                    description={"A database project built with NodeJS and Bootstrap"}
                    img={require("../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
                    link={"/work/pokemondb"}
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
                <Wide
                    title={"E-Commerce Retail"}
                    description={"Combining local retail shops on West Van to design a one stop shop e-commerce experience"}
                    img={require("../assets/case-studies/ecommerce/coverimage-ecommerce.jpg")}
                    link={"/work/ecommerce"}
                />
                <Wide
                    title={"Space Battle Ex Mobile Game"}
                    description={"A space themed revision of a retro game called Puzzle Bobble"}
                    img={require("../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")}
                    link={"/work/spacebattle"}
                />
                <Tall
                    title={"Experimental Designs"}
                    description={null}
                    img={require("../assets/case-studies/concepts/coverimage-concepts.jpg")}
                    link={"/work/concepts"}
                />
                <NoLinkWide
                    title={"Skyrocket Digital"}
                    description={null}
                    img={require("../assets/case-studies/coverimage-skyrocket.jpg")}
                />

            </WorkCont>
        </MainCont>
    );
}

export default Work;