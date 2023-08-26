import styles from "./order-success.module.css";
import { FC } from "react";
import { useSelector } from "../../hooks/redux-hooks";

import CheckIcon from "../../images/check.svg";
import Preloader from "../preloader/preloader";
import { getOrder, getOrderFailed, getOrderRequest } from "../../services/order-details/selectors";

// Types
import { TNewOrder } from "../../types/new-order";

const OrderSuccess: FC = () => {
    const order: TNewOrder | null = useSelector(getOrder);
    const orderRequest: boolean = useSelector(getOrderRequest);
    const orderFailed: boolean = useSelector(getOrderFailed);

    return (
        <>
            {orderRequest ? (
                <Preloader />
            ) : orderFailed ? (
                "Произошла ошибка при отправке заказа"
            ) : order && (
                <div className={`${styles["order-success"]} pt-4 pb-20`}>
                    <div className="order-success__number text text_type_digits-large mb-8">{order.number}</div>
                    <div className="order-success__caption text text_type_main-medium mb-15">идентификатор заказа</div>
                    <div className={styles["order-success__check"]}>
                        <img src={CheckIcon} alt="Check" title="Check" />
                    </div>
                    <div className="text text_type_main-default mb-2">Ваш заказ начали готовить</div>
                    <div className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</div>
                </div>
            )}
        </>
    );
};

export default OrderSuccess;
