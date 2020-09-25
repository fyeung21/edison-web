import React from "react";
import CaseLayout from "../../components/WorkCaseStudies/CaseLayout";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import ProjectNav from "../../components/WorkCaseStudies/ProjectNav";
import Head from "../../components/Head/Head";

const Concepts = () => {
    return (
        <CaseLayout>
            <Head title={"Concepts"} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/ov_LPAbro1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/ov_LPAbro2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/edison_bcard_mockup01.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/edison_bcard_mockup02.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept1.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept1a.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept2.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/website_concept_hor.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/coverimage-concepts.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/marshmbook.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/buttonstudy.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/catvconceptedison-01.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/flatpotleafexerciseedison-01.jpg")} />
            <ProjectImg projectImg={require("../../assets/case-studies/concepts/abstlogoexerciseedison-01.jpg")} />
            <ProjectNav />
        </CaseLayout>
    );
}

export default Concepts;