import React from "react";
import { TallCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const NoLinkTall = ({ title, description, img }) => {
    return (
        <>
            <TallCont>
                <StyledImg
                    src={img}
                    alt="project thumbnail" />
                <HoverCard title={title} description={description} />
            </TallCont>
            <MobileVer>
                <CardInfo title={title} description={description} />
            </MobileVer>
        </>
    );
}

export default NoLinkTall;