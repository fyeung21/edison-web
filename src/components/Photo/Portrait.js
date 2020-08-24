import React from "react";
import LazyLoad from "react-lazy-load";
import { PositionCont, PortraitCont, PhotoImg } from "./photoStyles";

const Portrait = ({ img }) => {
    return (
        <PositionCont>
            <LazyLoad debounce={false} offsetVertical={1000}>
                <PortraitCont>
                    <PhotoImg
                        src={img}
                        alt="photo" />
                </PortraitCont>
            </LazyLoad>
        </PositionCont>
    );
}

export default Portrait;