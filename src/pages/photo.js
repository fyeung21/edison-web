import React from "react";
import { PhotoCont } from "../components/Photo/photoStyles";
import ReturnTop from "../components/ReturnTop/ReturnTop";
import Portrait from "../components/Photo/Portrait";
import Landscape from "../components/Photo/Landscape";

const Photo = () => {
    return (
        <PhotoCont>
            <ReturnTop />
            <Portrait img={require("../assets/photography/edison_CR_002.jpg")} />
            <Portrait img={require("../assets/photography/edison_CR_001.jpg")} />
            <Landscape img={require("../assets/photography/edison_CR_003.JPG")} />
            <Landscape img={require("../assets/photography/edison_CF_005f.jpg")} />
            <Landscape img={require("../assets/photography/edison_CR_007.jpg")} />
            <Landscape img={require("../assets/photography/coverpage2.JPG")} />
            <Landscape img={require("../assets/photography/edison_CR_009.jpg")} />
            <Landscape img={require("../assets/photography/edison_LE_005w.jpg")} />
            <Landscape img={require("../assets/photography/edison_LE_004b.JPG")} />
            <Landscape img={require("../assets/photography/edison_LE_002.JPG")} />
            <Landscape img={require("../assets/photography/edison_LE_003.JPG")} />
            <Landscape img={require("../assets/photography/edison_LE_001.JPG")} />
            <Landscape img={require("../assets/photography/edison_LE_006.jpg")} />
            <Landscape img={require("../assets/photography/edison_LE_007.jpg")} />
            <Landscape img={require("../assets/photography/edison_MS_004.jpg")} />
            <Landscape img={require("../assets/photography/edison_PT_abstract01b.jpg")} />
            <Portrait img={require("../assets/photography/edison_MS_003.jpg")} />
            <Landscape img={require("../assets/photography/edison_LK_001b.jpg")} />
            <Landscape img={require("../assets/photography/edison_WS_honey01.JPG")} />
            <Landscape img={require("../assets/photography/edison_WS_honey02.JPG")} />
            <Portrait img={require("../assets/photography/edison_MS_002.JPG")} />
        </PhotoCont>
    );
}

export default Photo;