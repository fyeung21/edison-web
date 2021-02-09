import React from "react";
import { Container } from "../components/globalStyles";
import { PlayCont, DisplayFlex } from "../components/Play/playStyles";
import Head from "../components/Head/Head";
import ReturnTop from "../components/ReturnTop/ReturnTop";
import ImgModal from "../components/Play/ImgModal";

const Play = () => {
    return (
        <PlayCont>
            <Head title={"Play"} />
            <Container>
                <ReturnTop />
            </Container>
            <DisplayFlex>
                {/* Photography */}
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_007.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_008.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_002.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_CF_005f.jpg")}
                />
                {/* Graphics */}
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/rest-brochure-menu1.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/rest-brochure-menu2.jpg")}
                />
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
                    imgURL={require("../assets/case-studies/concepts/website_concept.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/case-studies/concepts/website_concept1.jpg")}
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
                    imgURL={require("../assets/case-studies/concepts/coverimage-coopradio.jpg")}
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
                {/* Photography */}
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_001.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_003.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_004.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_CR_009.jpg")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_LE_001.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_LE_002.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_LE_003.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_LE_004b.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_LE_005.JPG")}
                />
                <ImgModal
                    imgURL={require("../assets/photography/edison_LE_006.jpg")}
                />

            </DisplayFlex>

        </PlayCont>
    );
}

export default Play;