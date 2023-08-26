import { useRef, FC } from "react";
import { useDrop, useDrag } from "react-dnd";
import styles from "../burger-constructor/burger-constructor.module.css";
import { ConstructorTypes } from "../../services/constructor/constants";
import { useDispatch } from "../../hooks/redux-hooks";

// Type
import { TConstructorItem } from "../../types";

import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorItem: FC<TConstructorItem> = ({ _id, name, price, image, index, handlerId, moveCard }) => {
    const dispatch = useDispatch();

    const removeIngredient = () => {
        dispatch({ type: ConstructorTypes.REMOVE_INGREDIENT, payload: handlerId });
    };

    const constructorItemRef = useRef<HTMLLIElement>(null);

    const [{ opacity }, drag] = useDrag({
        type: "constructorItem",
        item: () => ({ _id, index }),
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    const [, drop] = useDrop({
        accept: "constructorItem",
        hover(item: TConstructorItem, monitor) {
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
            const hoverClientY = clientOffset ? clientOffset.y - hoverBoundingRect.top : hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    drag(drop(constructorItemRef));

    const preventDefault = (e: React.DragEvent) => e.preventDefault();

    return (
        <li draggable ref={constructorItemRef} style={{ opacity }} onDrop={preventDefault} data-handler-id={handlerId} className={`${styles["burger-constructor__item"]}`}>
            <div className={`${styles.burger_constructor__drag}`}>
                <DragIcon type="primary" />
            </div>
            <ConstructorElement text={name} price={price} thumbnail={image} handleClose={removeIngredient} />
        </li>
    );
};

export default ConstructorItem;
