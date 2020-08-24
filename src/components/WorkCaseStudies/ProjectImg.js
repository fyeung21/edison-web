import React from "react";
import { ProjectImgCont, Image } from "./caseStyles";
import LazyLoad from "react-lazy-load";

const ProjectImg = ({ projectImg }) => {
    return (
        <ProjectImgCont>
            <LazyLoad debounce={false} offsetVertical={1000}>
                <Image src={projectImg} alt={"project image"} />
            </LazyLoad>
        </ProjectImgCont>
    );
}

export default ProjectImg;