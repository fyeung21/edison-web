import React from "react";
import LazyLoad from "react-lazy-load";
import { ProjectImgCont, Image } from "./caseStyles";

const ProjectImg = ({ projectImg }) => {
    return (
        <LazyLoad debounce={false} offsetVertical={1000}>
            <ProjectImgCont>
                <Image src={projectImg} alt={"project image"} />
            </ProjectImgCont>
        </LazyLoad>
    );
}

export default ProjectImg;