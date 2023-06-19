import { v4 as uuidv } from 'uuid';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import styles from './burger-constructor.module.css'
import { getOrder } from '../../services/redux/order-details/actions';
import { ConstructorTypes } from '../../services/redux/constructor/actions';
import { OrderDetailsTypes } from '../../services/redux/order-details/actions';
import { getUser } from '../../services/redux/user/selectors';
import { getConstructorItems } from '../../services/redux/constructor/selectors';

import { Button, CurrencyIcon, InfoIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ConstructorIngredientsList from '../constructor-ingredients-list/constructor-ingredients-list';
import loadingBun from '../../images/loading-bun.svg';
import classNames from 'classnames';

const BurgerConstructor = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { constructorIngredients, bun } = useSelector(getConstructorItems);
    const user = useSelector(getUser);

    const totalPrice = useMemo(() => {
        return (bun ? bun.price * 2 : 0) + constructorIngredients.reduce((acc, ingredient) => {
            return acc += ingredient.price;
        }, 0)
    }, [constructorIngredients, bun])

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
            dispatch({ type: ConstructorTypes.ADD_BUN, payload: item })
        } else {
            dispatch({ type: ConstructorTypes.ADD_INGREDIENT, payload: { ...item, handlerId: uuidv() } })
        }
    }

    const handleBtnClick = () => {
        if (!user) {
            navigate('/login')
        } else {

            toggleModal(true);
            document.body.classList.add('lock');

            dispatch(getOrder([bun, ...constructorIngredients, bun]));
        }
    }

    const handleCloseModal = () => {
        toggleModal(false);
        document.body.classList.remove('lock');
        dispatch({ type: OrderDetailsTypes.CLEAR })
    }

    return (
        <div className={`${styles['burger-constructor']}`}>
            <div ref={constructorTarget} className={classNames(styles['burger-constructor__body'], { [styles['is-hover']]: isHover }, 'mb-4')}>
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
                {constructorIngredients.length ? (
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
            <div className={`${styles['burger-constructor__bottom']} mr-4 mb-6`}>
                <div className={`${styles['burger-constructor__total-price']} mr-10`}>
                    <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button disabled={!bun} onClick={handleBtnClick} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {!user && (
                <div className={classNames(styles['burger-constructor__hint'], { [styles['is-visible']]: bun }, 'text', ' text_type_main-small')}>
                    <InfoIcon />
                    Войдите в аккаунт, чтобы оформить заказ
                </div>
            )}
            {isOrderModalOpen &&
                <Modal onClose={handleCloseModal}>
                    <OrderDetails />
                </Modal>
            }
        </div>
    )
}

export default BurgerConstructor;
