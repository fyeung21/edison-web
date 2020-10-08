import React from "react";
import { Modal, ModalWrapper, useModal } from "react-modal-wrap";
import { ImageThumb, ImageExpand, ImgSmallCont, ImgExpandCont, OverlayCont, MobileShow, TabletShow, HoverMask } from "./playStyles";

const ModalCloseButton = ({ children }) => {
    const { close } = useModal()
    return <div onClick={close}>{children}</div>
}
const ModalOpenButton = ({ children }) => {
    const { open } = useModal()
    return <div onClick={open}>{children}</div>
}

const ImgModal = ({ imgURL }) => {
    return (
        <>
            <MobileShow>
                <ImgSmallCont>
                    <ImageThumb src={imgURL} alt={"Image Thumbnail"} />
                </ImgSmallCont>
            </MobileShow>

            <TabletShow>
                <ModalWrapper>
                    <ModalOpenButton>
                        <ImgSmallCont>
                            <ImageThumb src={imgURL} alt={"Image Thumbnail"} />
                            <HoverMask />
                        </ImgSmallCont>
                    </ModalOpenButton>

                    <Modal overlay={true}>
                        <OverlayCont>
                            <ModalCloseButton>
                                <ImgExpandCont>
                                    <ImageExpand src={imgURL} alt={"Expanded Image"} />
                                </ImgExpandCont>
                            </ModalCloseButton>
                        </OverlayCont>
                    </Modal>
                </ModalWrapper>
            </TabletShow>
        </>
    );
}

export default ImgModal;