import React from "react";
import { BannerCont, BannerImg } from "./caseStyles";

const Banner = ({ bannerImg }) => {
    return (
        <BannerCont>
            <BannerImg src={bannerImg} alt={"banner img"} />
        </BannerCont>
    );
}

export default Banner;