import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { linkStyle } from "../globalStyles";
import { WideCont, StyledImg, MobileVer } from "./workStyles";
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const Wide = ({ title, description, img, link }) => {
    return (
        <>
            {link ?
                <Link to={link} rel="noopener noreferrer" style={linkStyle}>
                    <LazyLoad debounce={false} offsetVertical={1000}>
                        <WideCont>
                            <StyledImg
                                src={img}
                                alt="project thumbnail" />
                            <HoverCard title={title} description={description} />
                        </WideCont>
                    </LazyLoad>
                    <MobileVer>
                        <CardInfo title={title} description={description} />
                    </MobileVer>
                </Link>
                :
                <div>
                    <WideCont>
                        <StyledImg
                            src={img}
                            alt="project thumbnail" />
                        <HoverCard title={title} description={description} />
                    </WideCont>
                    <MobileVer>
                        <CardInfo title={title} description={description} />
                    </MobileVer>
                </div>
            }

        </>
    );
}

export default Wide;