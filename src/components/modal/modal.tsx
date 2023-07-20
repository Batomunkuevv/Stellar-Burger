import ReactDOM from "react-dom";
import { FC, useEffect } from "react";

import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';

// Types
import { TModal } from "../../types";

const modalRoot = document.getElementById("modals") as HTMLDivElement;

const Modal: FC<TModal> = ({ onClose, modalTitle, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', closeModalOnEsc);

        return (() => {
            window.removeEventListener('keydown', closeModalOnEsc);
        })

    }, [])

    const closeModalOnEsc = (e: KeyboardEvent) => {
        if (e.type === 'keydown' && e.key !== 'Escape') return;
        onClose();
    }

    return (
        ReactDOM.createPortal((
            <>
                <div className={`${styles.modal} pt-10 pb-15 pl-10 pr-10`}>
                    <div className={`${styles.modal__header}`}>
                        {modalTitle && (
                            <h2 className={`${styles.modal__title} text text_type_main-large`}>
                                {modalTitle}
                            </h2>
                        )}
                        <button type="button" onClick={onClose} className={`${styles.modal__close}`}>
                            <CloseIcon type="primary" />
                        </button>
                    </div>
                    {children}
                </div>
                <ModalOverlay onClose={onClose} />
            </>
        ), modalRoot)
    )
}

export default Modal;