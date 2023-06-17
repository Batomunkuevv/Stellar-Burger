import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import styles from '../burger-constructor/burger-constructor.module.css'
import { IngredientsTypes } from '../../services/redux/ingredients/actions';
import { ConstructorTypes } from '../../services/redux/constructor/actions';
import { useDispatch } from 'react-redux';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorItem = ({ _id, name, type, price, image, index, handlerId, moveCard }) => {
    const dispatch = useDispatch();

    const removeIngredient = () => {
        dispatch({ type: IngredientsTypes.DECREMENT, payload: { _id, type } })
        dispatch({ type: ConstructorTypes.REMOVE_INGREDIENT, payload: handlerId })
    }

    const constructorItemRef = useRef(null);

    const [{ opacity }, drag] = useDrag({
        type: 'constructorItem',
        item: () => ({ _id, index }),
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });


    const [, drop] = useDrop({
        accept: 'constructorItem',
        hover(item, monitor) {
            if (!constructorItemRef.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = constructorItemRef.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })

    drag(drop(constructorItemRef))

    const preventDefault = (e) => e.preventDefault();

    return (
        <>
            <li draggable
                ref={constructorItemRef}
                style={{ opacity }}
                onDrop={preventDefault} data-handler-id={handlerId} className={`${styles.burger_constructor__item}`}>
                <div className={`${styles.burger_constructor__drag}`}>
                    <DragIcon />
                </div>
                <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                    handleClose={removeIngredient}
                />
            </li>
        </>
    )
}

ConstructorItem.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handlerId: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired
}

export default ConstructorItem;