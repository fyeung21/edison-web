import React from "react";
import { PhotoCont } from "../components/Photo/photoStyles";
import Portrait from "../components/Photo/Portrait";
import Landscape from "../components/Photo/Landscape";

const Photo = () => {
    return (
        <PhotoCont>
            <Portrait img={require("../assets/photography/edison_CR_002.jpg")} loading = "lazy" />
            <Portrait img={require("../assets/photography/edison_CR_001.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_CR_003.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_CF_005f.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_CR_007.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/coverpage2.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_CR_009.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_005w.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_004b.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_002.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_003.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_001.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_006.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LE_007.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_MS_004.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_PT_abstract01b.jpg")} loading = "lazy" />
            <Portrait img={require("../assets/photography/edison_MS_003.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_LK_001b.jpg")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_WS_honey01.JPG")} loading = "lazy" />
            <Landscape img={require("../assets/photography/edison_WS_honey02.JPG")} loading = "lazy" />
            <Portrait img={require("../assets/photography/edison_MS_002.JPG")} loading = "lazy" />
        </PhotoCont>
    );
}

export default Photo;