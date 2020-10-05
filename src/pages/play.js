import React from "react";
import { MainCont } from "../components/globalStyles";
import Head from "../components/Head/Head";
import ModalImage from "react-modal-image";

const Play = () => {
    return (
        <MainCont>
            <Head title={"Play"} />
            <h1>test</h1>

            <div style={{ width: 300 }}>
                <ModalImage
                    small={require("../assets/case-studies/concepts/ov_LPAbro1.jpg")}
                    large={require("../assets/case-studies/concepts/ov_LPAbro1.jpg")}
                    alt="Hello World!"
                />
            </div>

        </MainCont>
    );
}

export default Play;