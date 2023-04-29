import React from 'react';
import ingredientStyles from './ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${ingredientStyles.ingredient}`}>
                {this.props.count !== 0 && <Counter count={this.props.count} size="default" />}
                <div className={`${ingredientStyles.ingredient__img} mb-2`}>
                    <img src={this.props.image} alt={this.props.name} title={this.props.name} />
                </div>
                <div className={`${ingredientStyles.ingredient__currency} text text_type_digits-default mb-2`} >
                    {this.props.price}
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${ingredientStyles.ingredient__name} text text_type_main-default`}>
                    {this.props.name}
                </div>
            </div>
        )
    }
}



export default Ingredient;