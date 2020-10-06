import React from "react";
import { Image, ImgSmallCont, ImgExpandCont, OverlayCont } from "./playStyles";
import { Modal, ModalWrapper, useModal } from "react-modal-wrap";

const ModalCloseButton = ({ children }) => {
    const { close } = useModal()
    return <div onClick={close}>{children}</div>
}
const ModalOpenButton = ({ children }) => {
    const { open } = useModal()
    return <div onClick={open}>{children}</div>
}

const ImgModal = ({ imgURL, imgName }) => {
    return (
        <>
            <ModalWrapper style={{ position: "relative" }}>
                <ModalOpenButton>
                    <ImgSmallCont>
                        <Image src={imgURL} alt={imgName} />
                    </ImgSmallCont>
                </ModalOpenButton>


                <Modal overlay={true} lockScroll={true}>
                    <OverlayCont>
                        <ModalCloseButton>
                            <ImgExpandCont>
                                <Image src={imgURL} alt={imgName} />
                            </ImgExpandCont>
                        </ModalCloseButton>
                    </OverlayCont>
                </Modal>
            </ModalWrapper>
        </>
    );
}

export default ImgModal;