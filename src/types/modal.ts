export type TModal = {
    modalTitle?: string;
    onClose: () => void;
}

export type TModalOverlay = Pick<TModal, 'onClose'>