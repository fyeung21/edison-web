import React from "react";
import { WideCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const NoLinkTall = ({ title, description, img }) => {
    return (
        <>
            <WideCont>
                <StyledImg
                    src={img}
                    alt="project thumbnail" />
                <HoverCard title={title} description={description} />
            </WideCont>
            <MobileVer>
                <CardInfo title={title} description={description} />
            </MobileVer>
        </>
    );
}

export default NoLinkTall;