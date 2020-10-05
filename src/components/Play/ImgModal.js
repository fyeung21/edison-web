import React from "react";
import ModalImage from "react-modal-image";
import { ThumbnailCont } from "./playStyles";

const ImgModal = ({ imgURL, imgName }) => {
    return (
        <ThumbnailCont>
            <ModalImage
                small={imgURL}
                large={imgURL}
                alt={imgName}
                hideDownload={true}
            />
        </ThumbnailCont>
    );
}

export default ImgModal;