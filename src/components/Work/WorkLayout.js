import React from "react";
import { WorkCont } from "./workStyles";
import Wide from "./Wide";
import Tall from "./Tall";

const WorkLayout = () => {
    return (
        <WorkCont>
            <Tall />
            <Wide />
            <Wide />
            <Tall />
            <Tall />
            <Wide />
            <Wide />
            <Tall />
            <Wide />
        </WorkCont>
    );
}

export default WorkLayout;