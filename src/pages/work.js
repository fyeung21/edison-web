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
                    link={"/translink"}
                />
                <Wide
                    title={"Pokedex Database"}
                    description={"A database project built with NodeJS and Bootstrap"}
                    img={require("../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
                    link={"/"}
                />
                <Wide
                    title={"feed+"}
                    description={"testing description"}
                    img={require("../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"Coop-radio"}
                    description={"testing description"}
                    img={require("../assets/case-studies/coopradio/coverimage-coopradio.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"Genomic Science"}
                    description={"testing description"}
                    img={require("../assets/case-studies/genomic/coverimage-genomic.jpg")}
                    link={"/"}
                />
                <Wide
                    title={"Ecommerce"}
                    description={"testing description"}
                    img={require("../assets/case-studies/ecommerce/coverimage-ecommerce.jpg")}
                    link={"/"}
                />
                <Wide
                    title={"Space Battle Ex"}
                    description={"testing description"}
                    img={require("../assets/case-studies/spacebattle/coverimage-spacebattle.png")}
                    link={"/"}
                />
                <Tall
                    title={"Experimental Designs"}
                    description={"testing description"}
                    img={require("../assets/case-studies/concepts/coverimage-concepts.jpg")}
                    link={"/"}
                />
                <Tall
                    title={"skyrocket"}
                    description={"testing description"}
                    img={require("../assets/case-studies/coverimage-skyrocket.jpg")}
                    link={"/"}
                />

            </WorkCont>
        </MainCont>
    );
}

export default Work;