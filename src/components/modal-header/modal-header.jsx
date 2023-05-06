import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalHeaderStyles from './modal-header.module.css';

const ModalHeader = (props) => {
    return (
        <div className={`${modalHeaderStyles.modal__header}`}>
            {props.children && (
                <h2 className={`${modalHeaderStyles.modal__title} text text_type_main-large`}>
                    {props.children}
                </h2>
            )}
            <div onClick={props.onClose} className={`${modalHeaderStyles.modal__close}`}>
                <CloseIcon type="primary" />
            </div>
        </div>
    )
}

export default ModalHeader;