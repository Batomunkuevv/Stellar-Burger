import { FC } from 'react';
import styles from './modal-overlay.module.css';

// Types
import { TModalOverlay } from '../../types';

const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
    return (
        <div onClick={onClose} className={`${styles.modal__overlay}`}>
        </div>
    )
}

export default ModalOverlay;