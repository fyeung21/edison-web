import React from "react";
import { MainCont } from "../components/globalStyles";
import { WorkCont } from "../components/Work/workStyles";
import Wide from "../components/Work/Wide";
import Tall from "../components/Work/Tall";

const Work = () => {
    return (
        <MainCont>
            <WorkCont>
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
                    link={"/"}
                />
                <Wide
                    title={"feed+"}
                    description={"A solution for a common first world problem: the existence of multiple social media accounts"}
                    img={require("../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"Coop-radio"}
                    description={"A landing website for artists featured on Vancouver Coop Radio"}
                    img={require("../assets/case-studies/coopradio/coverimage-coopradio.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"Genomic Science"}
                    description={"An educational mobile app that links existing desktop data into mobile"}
                    img={require("../assets/case-studies/genomic/coverimage-genomic.jpg")}
                    link={"/"}
                />
                <Wide
                    title={"E-Commerce Retail"}
                    description={"Combining local retail shops on West Van to design a one stop shop e-commerce experience"}
                    img={require("../assets/case-studies/ecommerce/coverimage-ecommerce.jpg")}
                    link={"/"}
                />
                <Wide
                    title={"Space Battle Ex Mobile Game"}
                    description={"A space themed revision of a retro game called Puzzle Bobble"}
                    img={require("../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"Experimental Designs"}
                    description={null}
                    img={require("../assets/case-studies/concepts/coverimage-concepts.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"AssistList"}
                    description={null}
                    img={require("../assets/case-studies/coverimage-assistlist.jpg")}
                    link={null}
                />
                <Wide
                    title={"Skyrocket Digital"}
                    description={null}
                    img={require("../assets/case-studies/coverimage-skyrocket.jpg")}
                    link={null}
                />

            </WorkCont>
        </MainCont>
    );
}

export default Work;