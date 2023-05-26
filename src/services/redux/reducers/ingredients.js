import { GET_INGREDEINTS_REQUEST, GET_INGREDEINTS_SUCCESS, GET_INGREDEINTS_FAILED, INCREMENT_INGREDIENT, DECREMENT_INGREDIENT } from "../actions/ingredients";

const initialStore = {
    ingredients: [],
    ingredientsFailed: false,
    ingredientsRequest: false,
};

export const ingredientsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case GET_INGREDEINTS_SUCCESS: {
            return {
                ingredients: action.payload.ingredients,
                ingredientsRequest: false,
                ingredientsFailed: false,
            };
        }
        case GET_INGREDEINTS_REQUEST: {
            return {
                ...store,
                ingredientsRequest: true,
            };
        }
        case GET_INGREDEINTS_FAILED: {
            return {
                ...store,
                ingredientsRequest: false,
                ingredientsFailed: true
            };
        }
        case INCREMENT_INGREDIENT: {
            const { _id, type } = action.payload;

            const incrementIngredients = store.ingredients.map(item => {
                if(type === 'bun' && item._id === _id){
                    return {
                        ...item,
                        counter: item.counter += 2
                    }
                }

                if (item._id === _id && type !== 'bun') {
                    return {
                        ...item,
                        counter: item.counter += 1
                    }
                }

                return item
            })

            return {
                ...store,
                ingredients: incrementIngredients
            }
        }
        case DECREMENT_INGREDIENT: {
            const { _id, type } = action.payload;

            const decrementIngredients = store.ingredients.map(item => {
                if(type === 'bun' && item._id === _id){
                    return {
                        ...item,
                        counter: item.counter -= 2
                    }
                }

                if (item._id === _id && type !== 'bun') {
                    return {
                        ...item,
                        counter: item.counter -= 1
                    }
                }

                return item
            })

            return {
                ...store,
                ingredients: decrementIngredients
            }
        }
        default: {
            return store;
        }
    }
};
