import { v4 as uuidv } from 'uuid';
import { useState, useMemo, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/redux-hooks';
import { useDrop } from 'react-dnd';
import styles from './burger-constructor.module.css'
import { getOrder } from '../../services/order-details/actions';
import { ConstructorTypes } from '../../services/constructor/constants';
import { OrderDetailsTypes } from '../../services/order-details/constants';
import { getUser } from '../../services/user/selectors';
import { getConstructorItems } from '../../services/constructor/selectors';

// Types
import { TIngredient } from '../../types';
import { TConstructorItems } from '../../types';
import { TUser } from '../../types';

import { Button, CurrencyIcon, InfoIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal';
import OrderSuccess from '../order-success/order-success';
import ConstructorIngredientsList from '../constructor-ingredients-list/constructor-ingredients-list';
import loadingBun from '../../images/loading-bun.svg';
import classNames from 'classnames';

const BurgerConstructor: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { constructorIngredients, bun }: TConstructorItems = useSelector(getConstructorItems);
    const user: TUser | null = useSelector(getUser);
    
    const totalPrice = useMemo(() => {
        return (bun ? bun.price * 2 : 0) + constructorIngredients.reduce((acc: number, ingredient: TIngredient) => {
            return acc += ingredient.price;
        }, 0)
    }, [constructorIngredients, bun])

    const [isOrderModalOpen, toggleModal] = useState(false);

    const [{ isHover }, constructorTarget] = useDrop<TIngredient, unknown, any>({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item: TIngredient) {
            onDropHandler(item);
        },
    })

    const onDropHandler = (item: TIngredient) => {
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

            dispatch(getOrder([bun, ...constructorIngredients, bun]) as any);
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
                    <InfoIcon type='primary'/>
                    Войдите в аккаунт, чтобы оформить заказ
                </div>
            )}
            {isOrderModalOpen &&
                <Modal onClose={handleCloseModal}>
                    <OrderSuccess />
                </Modal>
            }
        </div>
    )
}

export default BurgerConstructor;
