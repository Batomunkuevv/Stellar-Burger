import { FC } from "react";
import { useSelector } from "../../hooks/redux-hooks";
import styles from "./feed-orders.module.css";
import { getFeedOrders } from "../../services/feed";

import Order from "../order/order";

const FeedOrders: FC = () => {
    const orders = useSelector(getFeedOrders);

    return (
        <ul className={styles["feed-orders"]}>
            {orders.map(order => (
                <Order key={order._id} {...order}/>
            ))}
        </ul>
    );
};

export default FeedOrders;
