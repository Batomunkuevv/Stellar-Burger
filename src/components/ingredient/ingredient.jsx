import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ingredientStyles from './ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const Ingredient = (props) => {
    const [visibleModal, toggleModal] = useState(false);

    function handleOpenModal() {
        toggleModal(true);
        document.body.style.overflow = 'hidden';
    }

    function handleCloseModal(e) {
        if (e.type === 'keydown' && e.key !== 'Escape') return;

        toggleModal(false);
        document.body.style.overflow = '';
    }

    const modal = (
        <Modal onClose={handleCloseModal} modalTitle='Детали ингредиента'>
            <IngredientDetails name={props.name} image={props.image_large} calories={props.calories} carbohydrates={props.carbohydrates} fat={props.fat} proteins={props.proteins} />
        </Modal>
    )

    return (
        <>
            <div onClick={handleOpenModal} className={`${ingredientStyles.ingredient}`}>
                {/* <Counter count={props.__v} size="default" /> */}
                <div className={`${ingredientStyles.ingredient__img} mb-2`}>
                    <img src={props.image} alt={props.name} title={props.name} />
                </div>
                <div className={`${ingredientStyles.ingredient__currency} text text_type_digits-default mb-2`} >
                    {props.price}
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${ingredientStyles.ingredient__name} text text_type_main-default`}>
                    {props.name}
                </div>
            </div>
            {visibleModal && modal}
        </>
    )
}

Ingredient.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default Ingredient;