import React from "react";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const Concepts = () => {
    return (
        <CaseLayout>
            <Head title={"Concepts"} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/rest-brochure-menu1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/rest-brochure-menu2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/ov_LPAbro1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/ov_LPAbro2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/edison_bcard_mockup01.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/edison_bcard_mockup02.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept1ab.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept_hor.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/coverimage-ecommerce.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/r1 cardovp 2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/r1 cardovp 3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/coverimage-concepts.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/marshmbook.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/buttonstudy.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/coverimage-spacebattle.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/sb cardovp 2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/sb cardovp 3.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/flatpotleafexerciseedison-01.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Concepts;