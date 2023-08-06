import styles from "./order-info-item.module.css";
import { FC } from "react";

import classNames from "classnames";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientWithCount } from "../../types";

const OrderInfoItem: FC<TIngredientWithCount> = ({ image, name, price, count }) => {
    return (
        <li className={styles["order-info-item"]}>
            <div className={classNames(styles["order-info-item__image"], "mr-4")}>
                <img src={image} />
            </div>
            <div className={classNames(styles["order-info-item__name"], "text", "text_type_main-default", "mr-4")}>{name}</div>
            <div className={classNames(styles["order-info-item__price"], "text", "text_type_digits-default")}>
                {count} x {price}
                <CurrencyIcon type="primary" />
            </div>
        </li>
    );
};

export default OrderInfoItem;
