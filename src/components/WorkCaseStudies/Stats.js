import React from "react";
import { StatsMainCont, ProjectTitle, StatsSubCont, TypeCont, Category, DataTxt, PresLink } from "./caseStyles";
import { Container } from "../globalStyles";

const Stats = ({ projectName, projectTime, myRole, tools, platform, presentation, github, code, demo, team, projectType, others }) => {
    return (
        <Container>
            <StatsMainCont>
                <ProjectTitle>{projectName}</ProjectTitle>
                <StatsSubCont>
                    <TypeCont>
                        <Category>project time</Category>
                        <DataTxt>{projectTime}</DataTxt>
                    </TypeCont>
                    <TypeCont>
                        <Category>my role</Category>
                        <DataTxt>{myRole}</DataTxt>
                    </TypeCont>

                    {team ?
                        <TypeCont>
                            <Category>team breakdown</Category>
                            <DataTxt>{team}</DataTxt>
                        </TypeCont>
                        : null
                    }

                    {others ?
                        <TypeCont>
                            <Category>other members</Category>
                            <DataTxt>{others}</DataTxt>
                        </TypeCont>
                        : null
                    }

                    <TypeCont>
                        <Category>tools</Category>
                        <DataTxt>{tools}</DataTxt>
                    </TypeCont>
                    <TypeCont>
                        <Category>platform</Category>
                        <DataTxt>{platform}</DataTxt>
                    </TypeCont>

                    {presentation ?
                        <TypeCont>
                            <Category>presentation</Category>
                            <PresLink target="_blank" href={presentation}>case study link</PresLink>
                        </TypeCont>
                        : null
                    }

                    {code ?
                        <TypeCont>
                            <Category>code</Category>
                            <DataTxt>{code}</DataTxt>
                        </TypeCont>
                        : null
                    }

                    {github ?
                        <TypeCont>
                            <Category>github</Category>
                            <PresLink target="_blank" href={github}>github link</PresLink>
                        </TypeCont>
                        : null
                    }

                    {demo ?
                        <TypeCont>
                            <Category>presentation</Category>
                            <PresLink target="_blank" href={demo}>live demo link</PresLink>
                        </TypeCont>
                        : null
                    }

                    {projectType ?
                        <TypeCont>
                            <Category>project type</Category>
                            <DataTxt>{projectType}</DataTxt>
                        </TypeCont>
                        : null
                    }
                </StatsSubCont>
            </StatsMainCont>
        </Container>
    );
}

export default Stats;