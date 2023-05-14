import { useState, useContext, useReducer, useEffect, useMemo } from 'react';
import { Button, CurrencyIcon, ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsContext from '../../utils/appContext';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css'
import { getOrderNumber } from '../../utils/burger-api';

const totalPriceInitialState = { totalPrice: 0 };

const reducer = (state, action) => {
    state = totalPriceInitialState.totalPrice;

    if (action.ingredients && action.bun) {
        action.ingredients.forEach(ingredient => {
            state += ingredient.price;
        })

        state += action.bun.price * 2

        return { totalPrice: state };
    } else {
        throw new Error('Ошибка в получении ингредиентов');
    }
}

const BurgerConstructor = () => {
    const constructorIngredients = useContext(IngredientsContext);

    const bun = useMemo(() => {
        return constructorIngredients.find(ingredient => ingredient.type === 'bun')
    }, [constructorIngredients]);

    const ingredients = useMemo(() => {
        return constructorIngredients.filter(ingredient => ingredient.type !== 'bun')
    }, [constructorIngredients]);

    const [totalPriceState, dispatcherTotalPrice] = useReducer(reducer, totalPriceInitialState, undefined);
    const [isOrderModalOpen, toggleModal] = useState(false);
    const [orderNumber, setOrberNumber] = useState(null);

    function handleOpenModal() {
        toggleModal(true);
        document.body.classList.add('lock');

        getOrderNumber([...ingredients, bun])
            .then(setOrberNumber)
    }

    function handleCloseModal(e) {
        if (e.type === 'keydown' && e.key !== 'Escape') return;

        toggleModal(false);
        document.body.classList.remove('lock');
    }

    useEffect(() => {
        dispatcherTotalPrice({ ingredients: ingredients, bun: bun });
    }, [constructorIngredients, bun])

    return (
        <div className={`${styles.burger_constructor} pt-25`}>
            <div className={`${styles.burger_constructor__body} mb-10`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                    extraClass="mr-4"
                />
                <ul className={`${styles.burger_constructor__list} pr-2`}>
                    {ingredients.map((ingredient, index) => (
                        <li className={`${styles.burger_constructor__item}`} key={index}>
                            <div className={`${styles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </li>
                    ))}
                </ul>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                    extraClass="mr-4"
                />
            </div>
            <div className={`${styles.burger_constructor__bottom} mr-4`}>
                <div className={`${styles.burger_constructor__total_price} mr-10`}>
                    <p className="text text_type_digits-medium mr-2">{totalPriceState.totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={handleOpenModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {isOrderModalOpen &&
                <Modal onClose={handleCloseModal}>
                    <OrderDetails orderNumber={orderNumber} />
                </Modal>
            }
        </div>
    )
}

export default BurgerConstructor;
