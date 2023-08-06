import { FC} from "react";
import { useSelector } from "../hooks/redux-hooks";
import styles from "./feed.module.css";
import { getFeedOrders } from "../services/feed";

import FeedOrders from "../components/feed-orders/feed-orders";
import FeedInfo from "../components/feed-info/feed-info";
import Preloader from "../components/preloader/preloader";

const FeedPage: FC = () => {
    const orders = useSelector(getFeedOrders);

    return (
        <div className="pl-5 pr-5">
            <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
            <div className={styles["feed"]}>
                {orders.length ? (
                    <>
                        <FeedOrders />
                        <FeedInfo />
                    </>
                ) : (
                    <Preloader extraClass="preloader--feed"/>
                )}
            </div>
        </div>
    );
};

export default FeedPage;
