import React from "react";
import PropTypes from 'prop-types';
import { Button, CurrencyIcon, ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from './burger-constructor.module.css'

class BurgerConstructor extends React.Component {
    render() {
        return (
            <div className={`${burgerConstructorStyles.burger_constructor} pt-25`}>
                <div className={`${burgerConstructorStyles.burger_constructor__body} mb-10`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={20}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        extraClass="mr-4"
                    />
                    <div className={`${burgerConstructorStyles.burger_constructor__list} pr-2`}>
                        <div className={`${burgerConstructorStyles.burger_constructor__item}`}>
                            <div className={`${burgerConstructorStyles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text="Соус традиционный галактический"
                                price={30}
                                thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
                            />
                        </div>
                        <div className={`${burgerConstructorStyles.burger_constructor__item}`}>
                            <div className={`${burgerConstructorStyles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text="Мясо бессмертных моллюсков Protostomia"
                                price={300}
                                thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
                            />
                        </div>
                        <div className={`${burgerConstructorStyles.burger_constructor__item}`}>
                            <div className={`${burgerConstructorStyles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text="Плоды Фалленианского дерева"
                                price={80}
                                thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
                            />
                        </div>
                        <div className={`${burgerConstructorStyles.burger_constructor__item}`}>
                            <div className={`${burgerConstructorStyles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
                            />
                        </div>
                        <div className={`${burgerConstructorStyles.burger_constructor__item}`}>
                            <div className={`${burgerConstructorStyles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
                            />
                        </div>
                        <div className={`${burgerConstructorStyles.burger_constructor__item}`}>
                            <div className={`${burgerConstructorStyles.burger_constructor__drag}`}>
                                <DragIcon />
                            </div>
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
                            />
                        </div>
                    </div>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={20}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        extraClass="mr-4"
                    />
                </div>
                <div className={`${burgerConstructorStyles.burger_constructor__bottom} mr-4`}>
                    <div className={`${burgerConstructorStyles.burger_constructor__total_price} mr-10`}>
                        <p className="text text_type_digits-medium mr-2">610</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        );
    }
}

ConstructorElement.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isLocked: PropTypes.bool,
    extraClass: PropTypes.string
}

export default BurgerConstructor;
