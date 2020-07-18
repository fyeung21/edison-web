import React from 'react';
import Stats from '../../components/WorkDetails/Stats';
import Banner from '../../components/WorkDetails/Banner';

const Translink = () => {
    return (
        <>
            <Banner bannerImg={"https://via.placeholder.com/800x446/d3d3d3"} />
            <Stats
                projectName={"Translink Compass"}
                projectTime={"2 weeks"}
                myRole={"UX & UI"}
                tools={"Sketch / Illustrator / Photoshop"}
                platform={"iOS Mobile App"}
                presentation={"https://www.canva.com/design/DAD7VmqxQhc/7eRKD-ef_RatsS_RuACCbw/view?utm_content=DAD7VmqxQhc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"}
            />
        </>
    );
}

export default Translink;