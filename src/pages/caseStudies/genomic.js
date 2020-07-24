import React from "react";
import { CaseStudyCont } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";
import Description from "../../components/WorkCaseStudies/Description";

const Genomic = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/genomic/coverimage-genomic.jpg")}
            />
            <Stats
                projectName={"Genomic Science"}
                projectTime={"2.5 weeks"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"iOS Mobile App"}
                presentation={"https://blog.prototypr.io/genomic-science-e6389187554?gi=9bccff31ac01"}
            />
            <Description
                description={"The goal is to to design an educational, interactive and lightweight mobile platform to spark the general public’s interest in genetic science. Our targeted users will be focused on related studies of students and researchers, hoping to help spread the word of the mobile application once it is launched. Thereafter, the focus will shift to a more general public approach, hoping to generate more interests."}
            />
            <Description
                description={"The biggest challenge for this project was the lack of similar apps in both the Apple’s App Store and Android’s Play Store. Neither of the app stores have anything similar because genomic science is a very broad topic. In addition, the amount of data that needs to be transcribed and computed from raw data is too complex and unique."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
        </CaseStudyCont>
    );
}

export default Genomic;