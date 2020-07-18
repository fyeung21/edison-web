import React from "react";
import { MainCont } from "../components/globalStyles";
import { WorkCont } from "../components/Work/workStyles";
import Wide from "./Wide";
import Tall from "./Tall";

const Work = () => {
    return (
        <MainCont>
            <WorkCont>
                <Tall
                    title="TransLink Compass"
                    description={"A concept project providing an on-the-go solution for an essential city service."}
                    img={"https://via.placeholder.com/315x446/d3d3d3"}
                    link={"/translink"}
                />
                <Wide
                    title={"Pokedex Database"}
                    description={"A database project built with NodeJS and Bootstrap"}
                    img={"https://via.placeholder.com/630x446/41BAAE"}
                    link={"/"}
                />
                <Wide
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/630x446/41BAAE"}
                    link={"/"}
                />
                <Tall
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/315x446/d3d3d3"}
                    link={"/"}
                />
                <Tall
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/315x446/d3d3d3"}
                    link={"/"}
                />
                <Wide
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/630x446/41BAAE"}
                    link={"/"}
                />
                <Wide
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/630x446/41BAAE"}
                    link={"/"}
                />
                <Tall
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/315x446/d3d3d3"}
                    link={"/"}
                />
                <Tall
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/315x446/d3d3d3"}
                    link={"/"}
                />
                <Wide
                    title={"testing title"}
                    description={"testing description"}
                    img={"https://via.placeholder.com/630x446/41BAAE"}
                    link={"/"}
                />

            </WorkCont>
        </MainCont>
    );
}

export default Work;