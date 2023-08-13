import { FC } from "react";
import styles from "./user-orders.module.css";
import { useSelector } from "../../hooks/redux-hooks";
import { getUserOrders } from "../../services/user-orders";

import Order from "../order/order";

const UserOrders: FC = () => {
    const orders = useSelector(getUserOrders);

    return (
        <ul className={styles["user-orders"]}>
            {orders.map((order) => (
                <Order key={order._id} {...order} />
            ))}
        </ul>
    );
};

export default UserOrders;
