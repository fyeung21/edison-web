import React from "react";
import { PhotoCont } from "./photoStyles";
import Portrait from "./Portrait";
import Landscape from "./Landscape";

const PhotoLayout = () => {
    return (
        <PhotoCont>
            <Portrait />
            <Portrait />
            <Landscape />
            <Landscape />
            <Portrait />
        </PhotoCont>
    );
}

export default PhotoLayout;