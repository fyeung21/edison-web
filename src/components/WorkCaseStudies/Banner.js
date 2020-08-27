import React from "react";
import LazyLoad from "react-lazy-load";
import { BannerCont, BannerImg } from "./caseStyles";

const Banner = ({ bannerImg }) => {
    return (
        <LazyLoad debounce={false} offsetVertical={750}>
            <BannerCont>
                <BannerImg src={bannerImg} alt={"banner img"} />
            </BannerCont>
        </LazyLoad>
    );
}

export default Banner;