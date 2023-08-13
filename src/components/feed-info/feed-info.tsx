import { FC, useMemo } from "react";
import styles from "./feed-info.module.css";
import classNames from "classnames";
import { useSelector } from "../../hooks/redux-hooks";
import { getFeedOrders, getFeedTotal, getFeedTotalToday } from "../../services/feed";

const FeedInfo: FC = () => {
    const total = useSelector(getFeedTotal);
    const totalToday = useSelector(getFeedTotalToday);
    const orders = useSelector(getFeedOrders);
    const doneOrders = useMemo(() => {
        return orders.filter((order) => order.status === "done");
    }, [orders]);
    const pendingOrders = useMemo(() => {
        return orders.filter((order) => order.status === "pending");
    }, [orders]);

    return (
        <div className={styles["feed-info"]}>
            <div className={classNames(styles["feed-info__top"], "mb-15")}>
                <div className="feed-info__orders">
                    <div className="mb-6 text text_type_main-medium">Готовы:</div>
                    <ul className={classNames(styles["feed-info__orders"], styles["is-ready"])}>
                        {doneOrders.slice(0, 20).map((order) => (
                            <li key={order._id} className="feed-info__order text text_type_digits-default">
                                {order.number}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="feed-info__orders">
                    <div className="mb-6 text text_type_main-medium">В работе:</div>
                    <ul className={classNames(styles["feed-info__orders"])}>
                        {pendingOrders.slice(0, 20).map((order) => (
                            <li key={order._id} className="feed-info__order text text_type_digits-default">
                                {order.number}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="feed-info__ready mb-15">
                <div className="text text_type_main-medium">Выполнено за все время:</div>
                <div className={classNames(styles["feed-info__number"], "text", "text_type_digits-large", "mb-15")}>{total}</div>
            </div>
            <div className="feed-info__all">
                <div className="text text_type_main-medium">Выполнено за сегодня:</div>
                <div className={classNames(styles["feed-info__number"], "text", "text_type_digits-large", "mb-15")}>{totalToday}</div>
            </div>
        </div>
    );
};

export default FeedInfo;
