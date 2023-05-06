import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ModalHeader from '../modal-header/modal-header';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
    return (
        ReactDOM.createPortal((
            <>
                <div className={`${modalStyles.modal} pt-10 pb-15 pl-10 pr-10`}>
                    <ModalHeader onClose={props.onClose}>
                        {props.modalTitle}
                    </ModalHeader>
                    {props.children}
                </div>
                <ModalOverlay onClose = {props.onClose} />
            </>
        ), modalRoot)
    )
}

ModalHeader.propTypes = {
    onClose: PropTypes.func
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func
}

export default Modal;