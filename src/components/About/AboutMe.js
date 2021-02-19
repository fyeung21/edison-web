import React from "react";
import { MainCont } from "../globalStyles";
import { AboutTxt, QuoteCont, Quote, QuoteAuthor } from "./aboutStyles";

const AboutMe = () => {
    return (
        <MainCont>
            <AboutTxt>
            I have always been a curious individual, being a designer in the tech industry is like a scientist and an artist. Understanding how users interact with digital products feed my curiosity, and creating designs to help solve real life problems feed my passion. 

Throughout the past years, I have learned so much from companies and people I worked with. Each experience provided me an opportunity to master these skillsets that have contributed to shape who I am today as a designer.  
            </AboutTxt>
            <AboutTxt>
                <ul>
                    <li>· Being thrown in an art school early in my age prepared me for wireframe sketching and a keen eye for design visuals.</li>
                    
                    <li>· In university, marketing taught me the value of research and metrics to validate results in which I still apply in my user research. In fine arts, it strengthened my knowledge in color theory and compositions which prepared me for user interface designs.</li>
           
                    <li>· Working in retail prepared me to speak comfortably with people and be assertive in which I still apply when conducting interviews.</li>
              
                    <li>· Working as a financial advisor, it prepared me how to understand users’ needs with active listening, critical and analytical thinking skills to help find the best solution.</li>
        
                    <li>· Going back to school for user experience design further broaden my knowledge in user centric design. Learning how to code have enhanced my thinking abilities in tackling problems logically. </li>
                </ul>
            </AboutTxt>
            <AboutTxt>
                Even though my formal education has been completed, I have never stopped learning. I am continuing my journey to broaden my knowledge to provide new ideas and solutions to the table, and hopefully mentor new designers along the way.
            </AboutTxt>
            <QuoteCont>
                <Quote>" Design is content with intent. Content without intent is noise. Intent without content is decoration."</Quote>
                <QuoteAuthor>- Joe Sparano</QuoteAuthor>
            </QuoteCont>
        </MainCont>
    );
}

export default AboutMe;