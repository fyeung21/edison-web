import React from "react";
import { BannerCont, BannerImg } from "./detailStyles";

const Banner = ({ bannerImg }) => {
    return (
        <BannerCont>
            <BannerImg src={bannerImg} alt={"banner img"} />
        </BannerCont>
    );
}

export default Banner;