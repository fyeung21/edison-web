import React from "react";
import { PositionCont, PortraitCont, PhotoImg } from "./photoStyles";

const Portrait = ({ img }) => {
    return (
        <PositionCont>
            <PortraitCont>
                <PhotoImg
                    src={img}
                    alt="photo" />
            </PortraitCont>
        </PositionCont>
    );
}

export default Portrait;