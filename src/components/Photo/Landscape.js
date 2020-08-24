import React from "react";
import { PositionCont, LandscapeCont, PhotoImg } from "./photoStyles";
import LazyLoad from "react-lazy-load";

const Landscape = ({ img }) => {
    return (
        <PositionCont>
            <LandscapeCont>
                <LazyLoad debounce={false} offsetVertical={1000}>
                    <PhotoImg
                        src={img}
                        alt="photo" />
                </LazyLoad>
            </LandscapeCont>
        </PositionCont>
    );
}

export default Landscape;