import { getIngredientsRequest } from "../../../utils/burger-api";

export const name = 'INGREDIENTS';

export const IngredientsTypes = {
    GET_REQUEST : `${name}/GET_REQUEST`,
    GET_FAILED : `${name}/GET_FAILED`,
    GET_SUCCESS : `${name}/GET_SUCCESS`,
    INCREMENT : `${name}/INCREMENT`,
    DECREMENT : `${name}/DECREMENT`,
    RESET_INGREDIENTS_COUNTERS : `${name}/RESET_COUNTERS`,
}

export function getIngredients() {
    return (dispatch) => {
        dispatch({
            type: IngredientsTypes.GET_REQUEST,
        });

        getIngredientsRequest()
            .then((res) => {
                const ingredients = res.data.map(item => {
                    return {
                        ...item,
                        counter: 0
                    }
                })

                dispatch({
                    type: IngredientsTypes.GET_SUCCESS,
                    payload: {
                        ingredients: ingredients,
                    },
                });
            })
            .catch(() => {
                dispatch({
                    type: IngredientsTypes.GET_FAILED,
                });
            });
    };
}