import React from "react";
import { MainCont } from "../components/globalStyles";
import Head from "../components/Head/Head";

const NotFound = () => {
    return (
        <MainCont>
            <Head title={"404"} />
            <h1>Page not Found</h1>
            <p>please redirect back here</p>
        </MainCont>
    );
}

export default NotFound;