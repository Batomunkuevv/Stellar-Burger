import ReactDOM from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("modals");

const Modal = ({ onClose, modalTitle, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', closeModalOnEsc)

        return (() => {
            window.removeEventListener('keydown', closeModalOnEsc)
        })

    }, [])

    const closeModalOnEsc = (e) => {
        if (e.type === 'keydown' && e.key !== 'Escape') return;
        onClose(false)
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

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    modalTitle: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Modal;