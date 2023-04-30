import ingredientStyles from './ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';


const Ingredient = (props) => {
    return (
        <div className={`${ingredientStyles.ingredient}`}>
            {props.count !== 0 && <Counter count={props.count} size="default" />}
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
    )
}

export default Ingredient;