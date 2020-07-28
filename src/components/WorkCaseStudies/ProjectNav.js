import React from "react";
import { ProjectNavCont } from "./caseStyles";
import NavCard from "./NavCard";

const ProjectNav = () => {
    return (
        <ProjectNavCont>
            <NavCard
                title="TransLink Compass"
                cardImg={require("../../assets/case-studies/translink/coverimage-translink.jpg")}
                link={"/work/translink"}
            />
            <NavCard
                title={"Pokedex Database"}
                cardImg={require("../../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
                link={"/work/pokemondb"}
            />
            <NavCard
                title={"feed+"}
                cardImg={require("../../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                link={"/work/feedplus"}
            />
            <NavCard
                title={"Coop-radio"}
                cardImg={require("../../assets/case-studies/coopradio/coverimage-coopradio.jpg")}
                link={"/work/coopradio"}
            />
            <NavCard
                title={"Genomic Science"}
                cardImg={require("../../assets/case-studies/genomic/coverimage-genomic.jpg")}
                link={"/work/genomic"}
            />
            <NavCard
                title={"E-Commerce Retail"}
                cardImg={require("../../assets/case-studies/ecommerce/coverimage-ecommerce.jpg")}
                link={"/work/ecommerce"}
            />
            <NavCard
                title={"Space Battle Ex Mobile Game"}
                cardImg={require("../../assets/case-studies/spacebattle/coverimage-spacebattle.jpg")}
                link={"/work/spacebattle"}
            />
            <NavCard
                title={"Experimental Designs"}
                cardImg={require("../../assets/case-studies/concepts/coverimage-concepts.jpg")}
                link={"/work/concepts"}
            />
        </ProjectNavCont>
    );
}

export default ProjectNav;