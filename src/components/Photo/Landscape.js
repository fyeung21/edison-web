import React from "react";
import { PositionCont, LandscapeCont, PhotoImg } from "./photoStyles";

const Landscape = ({ img }) => {
    return (
        <PositionCont>
            <LandscapeCont>
                <PhotoImg
                    src={img}
                    alt="photo" />
            </LandscapeCont>
        </PositionCont>
    );
}

export default Landscape;