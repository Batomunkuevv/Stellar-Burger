import { getIngredientsRequest } from "../../../utils/burger-api";

export const name = 'INGREDIENTS';

export const IngredientsTypes = {
    GET_REQUEST : `${name}/GET_REQUEST`,
    GET_FAILED : `${name}/GET_FAILED`,
    GET_SUCCESS : `${name}/GET_SUCCESS`,
}

export function getIngredients() {
    return (dispatch) => {
        dispatch({
            type: IngredientsTypes.GET_REQUEST,
        });

        getIngredientsRequest()
            .then((res) => {
                dispatch({
                    type: IngredientsTypes.GET_SUCCESS,
                    payload: {
                        ingredients: res.data,
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