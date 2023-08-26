import { v4 as uuid } from "uuid";
import { FC, useEffect } from "react";
import classNames from "classnames";
import { useSelector } from "../../hooks/redux-hooks";
import { useLocation, useNavigate, useNavigationType, useParams } from "react-router-dom";
import styles from "./order-details.module.css";
import getStatusInfo from "../../utils/status-info";
import { getFeedOrders } from "../../services/feed";
import { getIngredients } from "../../services/ingredients/selectors";

import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderInfoItem from "../../components/order-info-item/order-info-item";
import Preloader from "../preloader/preloader";
import { TOrderDetail } from "./types";
import { getUserOrders } from "../../services/user-orders";

const OrderDetails: FC<TOrderDetail> = ({ onPage = false, inModal = false }) => {
    const location = useLocation();
    const from = location.state?.from?.pathname;

    const navigationType = useNavigationType();
    const navigate = useNavigate();

    const { orderId } = useParams();
    let orders = useSelector(getFeedOrders);
    let userOrders = useSelector(getUserOrders);
    const ingredients = useSelector(getIngredients);

    useEffect(() => {
        if (navigationType === "POP" && from) navigate(`${from}/${orderId}`, { replace: true });
    }, []);

    if (!orders.length) return <Preloader />;

    let order = orders.find((order) => order._id === orderId);

    if(!order) userOrders.find((order) => order._id === orderId)

    const orderIngredients = order?.ingredients
        .map((ingredientId) => {
            return ingredients.find((ingredient) => ingredient._id === ingredientId)!;
        })
        .map((ingredient, i, array) => ({
            ...ingredient,
            count: array.filter((item) => item?._id === ingredient?._id).length,
        }))
        .filter((ingredient, i, array) => {
            return i === array.findIndex((item) => item._id === ingredient._id);
        });
    const orderPrice = orderIngredients?.reduce((acc, ingredient) => (acc += ingredient.price * ingredient.count), 0);

    return (
        <>
            {order && (
                <div className={classNames(styles["order-details"], { [styles["order-details--page"]]: onPage })}>
                    {!inModal && <div className={classNames(styles["order-details__number"], "mb-10", "text", "text_type_digits-default")}>#{order.number}</div>}
                    <div className="order-details__name text text_type_main-medium mb-3">{order.name}</div>
                    <div className={classNames(styles["order-details__status"], "text", "text_type_main-default", "mb-15", { [styles["is-ready"]]: order.status === "done" })}>
                        {getStatusInfo(order.status)}
                    </div>
                    <div className="text text_type_main-medium mb-6">Состав: </div>
                    {orderIngredients && (
                        <ul className={classNames(styles["order-details__composition"], "pr-6")}>
                            {orderIngredients.map((ingredient) => ingredient && <OrderInfoItem key={uuid()} {...ingredient} />)}
                        </ul>
                    )}
                    <div className={styles["order-details__bottom"]}>
                        <FormattedDate className="order__date text text_type_main-default text_color_inactive" date={new Date(order.createdAt)}></FormattedDate>
                        <div className={classNames(styles["order-details__price"], "text", "text_type_digits-default")}>
                            {orderPrice}
                            <CurrencyIcon type="primary"></CurrencyIcon>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderDetails;
