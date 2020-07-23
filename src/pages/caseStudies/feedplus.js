import React from "react";
import { CaseStudyCont } from "../../components/CaseStudies/detailStyles";
import Stats from "../../components/CaseStudies/Stats";
import Banner from "../../components/CaseStudies/Banner";
import ProjectImg from "../../components/CaseStudies/ProjectImg";
import Description from "../../components/CaseStudies/Description";

const Feedplus = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/feedplus/coverimage-feedplus.jpg")}
            />
            <Stats
                projectName={"feed+"}
                projectTime={"2 weeks"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DAD7VmqxQhc/7eRKD-ef_RatsS_RuACCbw/view?utm_content=DAD7VmqxQhc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
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
            <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
        </CaseStudyCont>
    );
}

export default Feedplus;