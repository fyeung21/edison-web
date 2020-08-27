import React from "react";
import LazyLoad from "react-lazy-load";
import { BannerCont, BannerImg } from "./caseStyles";

const Banner = ({ bannerImg }) => {
    return (
        <BannerCont>
            <LazyLoad debounce={false} offsetVertical={750}>
                <BannerImg src={bannerImg} alt={"banner img"} />
            </LazyLoad>
        </BannerCont>
    );
}

export default Banner;