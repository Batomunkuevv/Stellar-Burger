import PropTypes from 'prop-types';
import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {
    return (
        <div onClick={onClose} className={`${modalOverlayStyles.modal__overlay}`}>
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func
}

export default ModalOverlay;