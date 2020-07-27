import React from "react";
import { CaseStudyCont, Description, ContentHeading } from "../../components/WorkCaseStudies/caseStyles";
import Stats from "../../components/WorkCaseStudies/Stats";
import Banner from "../../components/WorkCaseStudies/Banner";
import ProjectImg from "../../components/WorkCaseStudies/ProjectImg";

const Genomic = () => {
    return (
        <CaseStudyCont>
            <Banner
                bannerImg={require("../../assets/case-studies/genomic/coverimage-genomic.jpg")}
            />
            <Stats
                projectName={"Genomic Science"}
                projectTime={"2.5 weeks"}
                myRole={"UX + UI"}
                tools={"Sketch / Illustrator / Photoshop / Miro / Invision"}
                platform={"iOS Mobile App"}
                presentation={"https://blog.prototypr.io/genomic-science-e6389187554?gi=9bccff31ac01"}
                team={"3 UX / 3 UI "}
                client={"Koonkie"}
            />
            <Description>
                The goal was to design an educational, interactive and lightweight mobile platform to
                spark the general public’s interest in genetic science. Our targeted users will be focused
                on related studies of students and researchers, hoping to help spread the word of the mobile
                application once it is launched. Thereafter, the focus will shift to a more general public
                approach, hoping to generate more interests.
                </Description>

            <ContentHeading>The Challenge</ContentHeading>
            <Description>
                The biggest challenge for this project was the lack of similar apps in both the Apple’s App
                Store and Android’s Play Store. Neither of the app stores have anything similar because genomic
                science is a very broad topic. In addition, the amount of data that needs to be transcribed and
                computed from raw data is too complex and unique.
                </Description>

            <ContentHeading>Testing</ContentHeading>
            <Description>
                What worked: during our testing phase, our users find our app quite interactive and the flow
                between pages worked flawlessly. Our higher fidelity wireframes also helped our users
                understand the topic more. As mentioned, genomic science is not a small topic and is not
                easily perceived by a regular individual who has no science background. Because of this, we
                have actually tested two different navigation styles (refer to the image above.) The left
                image navigation style is to provide the user with information about each tab, and also
                providing a cleaner and taller screen space for content. The right image navigation style is
                to provide a generic and consistent experience, but this would take away the explanation and
                take up extra screen space from content.
                </Description>
            <Description>
                From the user testing, we found out that majority of the users prefer the left image navigation.
                This is because of the heavy load of information from the topic itself. Given that, the
                interactive design approach might add extra load of thinking to our users. Therefore, we decided
                to keep things clean and simple, and provide a better experience to focus on the content.
                </Description>
            <Description>
                What didn’t work: at this phase, we found out that some of the design aspects were causing a
                confusion among some users, and this is mostly due to the absent of animations. Since our
                testing were all static images, it was very hard to convey the right tone and mood to our end
                users for testing. If we had more time, we wish we could have animated the wireframes for
                testing.
                </Description>

            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />
            <ProjectImg
                projectImg={"https://via.placeholder.com/650x450/d3d3d3"}
            />

        </CaseStudyCont >
    );
}

export default Genomic;