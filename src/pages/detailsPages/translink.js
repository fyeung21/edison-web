import React from 'react';
import Stats from '../../components/WorkDetails/Stats';
import Banner from '../../components/WorkDetails/Banner';
import ProjectImg from '../../components/WorkDetails/ProjectImg';
import Description from '../../components/WorkDetails/Description';

const Translink = () => {
    return (
        <>
            <Banner
                bannerImg={"https://via.placeholder.com/800x446/d3d3d3"}
            />
            <Stats
                projectName={"Translink Compass"}
                projectTime={"2 weeks"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DAD7VmqxQhc/7eRKD-ef_RatsS_RuACCbw/view?utm_content=DAD7VmqxQhc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/800x446/d3d3d3"}
            />
            <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/800x446/d3d3d3"}
            />
            <Description
                description={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/800x446/d3d3d3"}
            />
        </>
    );
}

export default Translink;