import ReactDOM from "react-dom";
import { FC, useEffect, PropsWithChildren } from "react";
import { useParams } from "react-router-dom";

import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

// Types
import { TModal } from "../../types";
import { useSelector } from "../../hooks/redux-hooks";
import { getFeedOrders } from "../../services/feed";
import classNames from "classnames";

const modalRoot = document.getElementById("modals") as HTMLDivElement;

const Modal: FC<PropsWithChildren<TModal>> = ({ onClose, modalTitle, children, type }) => {
    const { orderId } = useParams();
    const orders = useSelector(getFeedOrders);
    const order = orders.find((item) => item._id === orderId);
    
    useEffect(() => {
        window.addEventListener("keydown", closeModalOnEsc);

        return () => {
            window.removeEventListener("keydown", closeModalOnEsc);
        };
    }, []);

    const closeModalOnEsc = (e: KeyboardEvent) => {
        if (e.type === "keydown" && e.key !== "Escape") return;
        onClose();
    };

    return ReactDOM.createPortal(
        <>
            <div className={`${styles.modal} pt-10 pb-15 pl-10 pr-10`}>
                <div className={classNames(styles.modal__header, {'mb-5': type === 'order'})}>
                    {modalTitle && <h2 className={`${styles.modal__title} text text_type_main-large`}>{modalTitle}</h2>}
                    {type === "order" && <h2 className="text text_type_digits-default">#{order?.number}</h2>}
                    <button type="button" onClick={onClose} className={`${styles.modal__close}`}>
                        <CloseIcon type="primary" />
                    </button>
                </div>
                {children}
            </div>
            <ModalOverlay onClose={onClose} />
        </>,
        modalRoot
    );
};

export default Modal;
