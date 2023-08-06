import { v4 as uuid } from "uuid";
import { FC, Fragment } from "react";
import classNames from "classnames";
import styles from "./order.module.css";

import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { TOrder } from "../../types";
import { useSelector } from "react-redux";
import { getIngredients } from "../../services/ingredients/selectors";

const Order: FC<TOrder> = ({ name, number, ingredients, status, createdAt, _id, isPersonal }) => {
    const location = useLocation();
    const allIngredients = useSelector(getIngredients);
    const orderPrice = ingredients.reduce((acc, ingredientId) => {
        const ingredient = allIngredients.find((ingredient) => ingredient._id === ingredientId);

        return ingredient ? acc + ingredient.price : acc;
    }, 0);
    const orderIngredients = ingredients.map((ingredientId) => allIngredients.find((ingredient) => ingredient._id === ingredientId));

    return (
        <li className={classNames(styles["order"], "p-6")}>
            <Link className={styles["order__link"]} to={_id} state={{ from: location }}>
                <div className={classNames(styles["order__top"], "mb-6")}>
                    <span className="order__number text text_type_digits-default">#{number}</span>
                    <FormattedDate className="order__date text_color_inactive" date={new Date(createdAt)}></FormattedDate>
                </div>
                {isPersonal && <div className="order__status">{status}</div>}
                <div className="order__name text text_type_main-medium mb-6">{name}</div>
                <div className={styles["order__bottom"]}>
                    <ul className={styles["order__ingredients"]}>
                        {orderIngredients.map((ingredient, i) => {
                            return (
                                <Fragment key={uuid()}>
                                    {i < 5 ? (
                                        <li className={styles["order__ingredient"]}>
                                            <img src={ingredient?.image} />
                                        </li>
                                    ) : i === 5 && ingredients.length > 6 ? (
                                        <li className={classNames(styles["order__ingredient"], styles["is-last"])}>
                                            <img src={ingredient?.image} />
                                            <div className={classNames(styles["order__more"], "text", "text_type_main-default")}>+{ingredients.length - 6}</div>
                                        </li>
                                    ) : i === 5 ? (
                                        <li className={styles["order__ingredient"]}>
                                            <img src={ingredient?.image} />
                                        </li>
                                    ) : null}
                                </Fragment>
                            );
                        })}
                    </ul>
                    <div className={classNames(styles["order__price"], "text", "text_type_digits-default")}>
                        {orderPrice}
                        <CurrencyIcon type="primary"></CurrencyIcon>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default Order;
