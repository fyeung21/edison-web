import React from "react";
import { ProjectImgCont, Image } from "./detailStyles"

const ProjectImg = ({ projectImg }) => {
    return (
        <ProjectImgCont>
            <Image src={projectImg} alt={"project image"} />
        </ProjectImgCont>
    );
}

export default ProjectImg;