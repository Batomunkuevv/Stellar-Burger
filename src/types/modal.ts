import { ReactNode } from "react";

export type TModal = {
    modalTitle?: string;
    onClose: () => void;
    children: ReactNode;
}

export type TModalOverlay = Pick<TModal, 'onClose'>