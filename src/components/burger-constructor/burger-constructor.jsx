import { v4 as uuidv } from 'uuid';
import { useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import styles from './burger-constructor.module.css'
import { getOrder } from '../../services/redux/actions/order';
import { ADD_CONSTRUCTOR_BUN, ADD_CONSTRUCTOR_INGREDIENT } from '../../services/redux/actions/constructor';
import { INCREMENT_INGREDIENT, DECREMENT_INGREDIENT } from '../../services/redux/actions/ingredients';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ConstructorIngredientsList from '../constructor-ingredients-list/constructor-ingredients-list';
import { Button, CurrencyIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import loadingBun from '../../images/loading-bun.svg';

const totalPriceInitialState = { totalPrice: 0 };

const reducer = (state, action) => {
    state = totalPriceInitialState.totalPrice;

    if (!action.ingredients && !action.bun) return { totalPrice: 0 };

    if (action.ingredients) {
        action.ingredients.forEach(ingredient => {
            state += ingredient.price;
        })
    }

    if (action.bun) {
        state += action.bun.price * 2
    }

    return { totalPrice: state };
}

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const { ingredients, bun } = useSelector(store => store.burgerConstructor);

    const [totalPriceState, dispatcherTotalPrice] = useReducer(reducer, totalPriceInitialState, undefined);
    const [isOrderModalOpen, toggleModal] = useState(false);

    const [{ isHover }, constructorTarget] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item) {
            onDropHandler(item);
        },
    })

    const onDropHandler = (item) => {
        const isBun = item.type === 'bun';

        if (isBun) {
            dispatch({ type: ADD_CONSTRUCTOR_BUN, payload: item })

            if (bun) {
                dispatch({ type: DECREMENT_INGREDIENT, payload: bun })
            }
        } else {
            dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, payload: {...item, handlerId: uuidv()} })
        }

        dispatch({ type: INCREMENT_INGREDIENT, payload: item })
    }

    const handleOpenModal = () => {
        toggleModal(true);
        document.body.classList.add('lock');

        dispatch(getOrder([...ingredients, bun]));
    }

    const handleCloseModal = () => {
        toggleModal(false);
        document.body.classList.remove('lock');
    }

    useEffect(() => {
        dispatcherTotalPrice({ ingredients: ingredients, bun: bun });
    }, [ingredients, bun])

    return (
        <div className={`${styles['burger-constructor']}`}>
            <div ref={constructorTarget} className={`${styles.burger_constructor__body} ${isHover ? styles['is-hover'] : ''} mb-4`}>
                {(bun ? (
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass="mr-4"
                    />
                ) : (
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`Перетяните булочку сюда (верх)`}
                        price={0}
                        thumbnail={loadingBun}
                        extraClass="mr-4"
                    />
                ))}
                {ingredients.length ? (
                    <ConstructorIngredientsList />
                ) : (
                    <div className={`${styles['burger-constructor__trigger']} text text_type_main-medium`}>
                        Начните собирать свой бургер!
                    </div>
                )}
                {(bun ? (
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass="mr-4"
                    />
                ) : (
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`Перетяните булочку сюда (низ)`}
                        price={0}
                        thumbnail={loadingBun}
                        extraClass="mr-4"
                    />
                ))}
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
                    <OrderDetails />
                </Modal>
            }
        </div>
    )
}

export default BurgerConstructor;
