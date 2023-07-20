import styles from "./order-details.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";

import CheckIcon from "../../images/check.svg";
import Preloader from "../preloader/preloader";
import { getOrder, getOrderFailed, getOrderRequest } from "../../services/redux/order-details/selectors";

// Types
import { TOrder } from "../../types";

const OrderDetails: FC = () => {
    const order: TOrder = useSelector(getOrder);
    const orderRequest: boolean = useSelector(getOrderRequest);
    const orderFailed: boolean = useSelector(getOrderFailed);

    return (
        <>
            {orderRequest ? (
                <Preloader />
            ) : orderFailed ? (
                "Произошла ошибка при отправке заказа"
            ) : (
                <div className={`${styles["order-details"]} pt-4 pb-20`}>
                    <div className="order-details__number text text_type_digits-large mb-8">{order.number}</div>
                    <div className="order-details__caption text text_type_main-medium mb-15">идентификатор заказа</div>
                    <div className={styles["order-details__check"]}>
                        <img src={CheckIcon} alt="Check" title="Check" />
                    </div>
                    <div className="text text_type_main-default mb-2">Ваш заказ начали готовить</div>
                    <div className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</div>
                </div>
            )}
        </>
    );
};

export default OrderDetails;
