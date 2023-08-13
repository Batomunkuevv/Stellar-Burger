export type TModal = {
    modalTitle?: string;
    onClose: () => void;
    type?: 'order';
}

export type TModalOverlay = Pick<TModal, 'onClose'>