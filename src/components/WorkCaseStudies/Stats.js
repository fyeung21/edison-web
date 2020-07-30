import React from "react";
import { StatsMainCont, ProjectTitle, StatsSubCont, TypeCont, Category, DataTxt, PresLink } from "./caseStyles";
import { Container } from "../globalStyles";

const Stats = ({ projectName, projectTime, myRole, tools, platform, presentation, github, code, demo, team, client }) => {
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
                            <PresLink href={presentation}>case study link</PresLink>
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
                            <PresLink href={github}>github link</PresLink>
                        </TypeCont>
                        : null
                    }

                    {demo ?
                        <TypeCont>
                            <Category>presentation</Category>
                            <PresLink href={demo}>demo link</PresLink>
                        </TypeCont>
                        : null
                    }

                    {team ?
                        <TypeCont>
                            <Category>team breakdown</Category>
                            <DataTxt>{team}</DataTxt>
                        </TypeCont>
                        : null
                    }

                    {client ?
                        <TypeCont>
                            <Category>client</Category>
                            <DataTxt>{client}</DataTxt>
                        </TypeCont>
                        : null
                    }
                </StatsSubCont>
            </StatsMainCont>
        </Container>
    );
}

export default Stats;