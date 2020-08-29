import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { linkStyle } from "../globalStyles";
import { TallCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const Tall = ({ title, description, img, link }) => {
    return (
        <>
            {link ?
                <Link to={link} rel="noopener noreferrer" style={linkStyle}>
                    <LazyLoad debounce={false} offsetVertical={1000}>
                        <TallCont>
                            <StyledImg
                                src={img}
                                alt="project thumbnail" />
                            <HoverCard title={title} description={description} />
                        </TallCont>
                    </LazyLoad>
                    <MobileVer>
                        <CardInfo title={title} description={description} />
                    </MobileVer>
                </Link>
                :
                <div>
                    <TallCont>
                        <StyledImg
                            src={img}
                            alt="project thumbnail" />
                        <HoverCard title={title} description={description} />
                    </TallCont>
                    <MobileVer>
                        <CardInfo title={title} description={description} />
                    </MobileVer>
                </div>
            }

        </>
    );
}

export default Tall;