import React from "react";
import LazyLoad from "react-lazy-load";
import { PositionCont, PortraitCont, PhotoImg } from "./photoStyles";

const Portrait = ({ img }) => {
    return (
        <PositionCont>
            <PortraitCont>
                <LazyLoad debounce={false} offsetVertical={750}>
                    <PhotoImg
                        src={img}
                        alt="photo" />
                </LazyLoad>
            </PortraitCont>
        </PositionCont>
    );
}

export default Portrait;