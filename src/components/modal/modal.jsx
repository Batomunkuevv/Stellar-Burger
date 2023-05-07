import ReactDOM from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
    useEffect(() => {
        window.addEventListener('keydown', props.onClose)
        
        return (() => {
            window.removeEventListener('keydown', props.onClose)
        })
        
    }, [])

    return (
        ReactDOM.createPortal((
            <>
                <div className={`${modalStyles.modal} pt-10 pb-15 pl-10 pr-10`}>
                    <div className={`${modalStyles.modal__header}`}>
                        {props.children && (
                            <h2 className={`${modalStyles.modal__title} text text_type_main-large`}>
                                {props.modalTitle}
                            </h2>
                        )}
                        <div onClick={props.onClose} className={`${modalStyles.modal__close}`}>
                            <CloseIcon type="primary" />
                        </div>
                    </div>
                    {props.children}
                </div>
                <ModalOverlay onClose={props.onClose} />
            </>
        ), modalRoot)
    )
}

Modal.propTypes = {
    onClose: PropTypes.func,
    modalTitle: PropTypes.string
}

export default Modal;