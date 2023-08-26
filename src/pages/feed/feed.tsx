import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "../../hooks/redux-hooks";
import styles from "./feed.module.css";
import { getFeedOrders } from "../../services/feed";
import { FeedWsTypes } from "../../services/feed";

import FeedOrders from "../../components/feed-orders/feed-orders";
import FeedInfo from "../../components/feed-info/feed-info";
import Preloader from "../../components/preloader/preloader";

const FeedPage: FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector(getFeedOrders);

    useEffect(() => {
        dispatch({ type: FeedWsTypes.CONNECTION_START });

        return () => {
            dispatch({ type: FeedWsTypes.CONNECTION_CLOSED });
        }
    }, [dispatch])

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
                    <Preloader extraClass="preloader--feed" />
                )}
            </div>
        </div>
    );
};

export default FeedPage;
