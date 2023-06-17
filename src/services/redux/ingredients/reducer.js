import { IngredientsTypes } from "./actions";

const initialStore = {
    ingredients: [],
    ingredientsFailed: false,
    ingredientsRequest: false,
};

export const ingredientsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case IngredientsTypes.GET_SUCCESS: {
            return {
                ingredients: action.payload.ingredients,
                ingredientsRequest: false,
                ingredientsFailed: false,
            };
        }
        case IngredientsTypes.GET_REQUEST: {
            return {
                ...store,
                ingredientsRequest: true,
            };
        }
        case IngredientsTypes.GET_FAILED: {
            return {
                ...store,
                ingredientsRequest: false,
                ingredientsFailed: true
            };
        }
        case IngredientsTypes.INCREMENT: {
            const { _id, type } = action.payload;

            const incrementIngredients = store.ingredients.map(item => {
                if (type === 'bun' && item._id === _id) {
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
        case IngredientsTypes.DECREMENT: {
            const { _id, type } = action.payload;

            const decrementIngredients = store.ingredients.map(item => {
                if (type === 'bun' && item._id === _id) {
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
        case IngredientsTypes.RESET_INGREDIENTS_COUNTERS: {
            return {
                ...store,
                ingredients: store.ingredients.map(ingredient => ({...ingredient, counter: 0}))
            }
        }
        default: {
            return store;
        }
    }
};
