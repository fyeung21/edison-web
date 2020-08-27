import React from "react";
import LazyLoad from "react-lazy-load";
import { PositionCont, LandscapeCont, PhotoImg } from "./photoStyles";

const Landscape = ({ img }) => {
    return (
        <PositionCont>
            <LandscapeCont>
                <LazyLoad debounce={false} offsetVertical={750}>
                    <PhotoImg
                        src={img}
                        alt="photo" />
                </LazyLoad>
            </LandscapeCont>
        </PositionCont>
    );
}

export default Landscape;