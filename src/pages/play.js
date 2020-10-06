import React from "react";
import { MainCont, SectionHeading, HeadingDesc } from "../components/globalStyles";
import { DisplayFlex } from "../components/Play/playStyles";
import Head from "../components/Head/Head";
import ImgModal from "../components/Play/ImgModal";

const Play = () => {
    return (
        <MainCont>
            <Head title={"Play"} />
            <SectionHeading>play.</SectionHeading>
            <HeadingDesc>This section is for design concepts that I've created on the side.</HeadingDesc>

            <DisplayFlex>
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/ov_LPAbro1.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/ov_LPAbro2.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/edison_bcard_mockup01.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/edison_bcard_mockup02.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/website_concept1ab.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/website_concept_hor.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/coverimage-ecommerce.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/r1 cardovp 2.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/r1 cardovp 3.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/coverimage-concepts.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/marshmbook.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/buttonstudy.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/coverimage-spacebattle.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/sb cardovp 2.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/sb cardovp 3.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/flatpotleafexerciseedison-01.jpg")}
                />
            </DisplayFlex>

        </MainCont>
    );
}

export default Play;