import React from "react";
import { PlayCont, DisplayFlex } from "../components/Play/playStyles";
import Head from "../components/Head/Head";
import ImgModal from "../components/Play/ImgModal";

const Play = () => {
    return (
        <PlayCont>
            <Head title={"Play"} />

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

        </PlayCont>
    );
}

export default Play;