import React from "react";
import LazyLoad from "react-lazy-load";
import { PositionCont, LandscapeCont, PhotoImg } from "./photoStyles";

const Landscape = ({ img }) => {
    return (
        <PositionCont>
            <LazyLoad debounce={false} offsetVertical={1000}>
                <LandscapeCont>
                    <PhotoImg
                        src={img}
                        alt="photo" />
                </LandscapeCont>
            </LazyLoad>
        </PositionCont>
    );
}

export default Landscape;