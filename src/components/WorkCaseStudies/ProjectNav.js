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
            {/* <NavCard
                title={"Experimental Designs"}
                cardImg={require("../../assets/case-studies/concepts/edison_bcard_mockup01.jpg")}
                link={"/work/concepts"}
            /> */}
            <NavCard
                title={"Pokedex Database"}
                cardImg={require("../../assets/case-studies/pokemondb/coverimage-pokemondb.jpg")}
                link={"/work/pokemondb"}
            />
            <NavCard
                title="AssistList"
                cardImg={require("../../assets/case-studies/assistlist/coverimage-assistlist.jpg")}
                link={"/work/assistlist"}
            />
            <NavCard
                title={"feed+"}
                cardImg={require("../../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
                link={"/work/feedplus"}
            />
            <NavCard
                title={"Genomic Science"}
                cardImg={require("../../assets/case-studies/genomic/coverimage-genomic.jpg")}
                link={"/work/genomic"}
            />
            <NavCard
                title={"Skyrocket Digital"}
                cardImg={require("../../assets/case-studies/coverimage-skyrocket.jpg")}
            />
            <NavCard
                title={"FF Autoworks"}
                cardImg={require("../../assets/case-studies/coverimage-ffautoworks.jpg")}
            />
        </ProjectNavCont>
    );
}

export default ProjectNav;