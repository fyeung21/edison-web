import React from "react";
import { PositionCont, PortraitCont, PhotoImg } from "./photoStyles";
import LazyLoad from "react-lazy-load";

const Portrait = ({ img }) => {
    return (
        <PositionCont>
            <PortraitCont>
                <LazyLoad debounce={false} offsetVertical={1000}>
                    <PhotoImg
                        src={img}
                        alt="photo" />
                </LazyLoad>
            </PortraitCont>
        </PositionCont>
    );
}

export default Portrait;