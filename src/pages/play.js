import React from "react";
import { MainCont, SectionHeading } from "../components/globalStyles";
import { HeadingDesc, DisplayFlex } from "../components/Play/playStyles";
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
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/ov_LPAbro2.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/edison_bcard_mockup01.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/edison_bcard_mockup02.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/website_concept1ab.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/website_concept_hor.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/coverimage-ecommerce.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/r1 cardovp 2.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/r1 cardovp 3.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/coverimage-concepts.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/marshmbook.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/buttonstudy.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/coverimage-spacebattle.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/sb cardovp 2.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/sb cardovp 3.jpg")}
                    imgName={"test"}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/flatpotleafexerciseedison-01.jpg")}
                    imgName={"test"}
                />
            </DisplayFlex>

        </MainCont>
    );
}

export default Play;