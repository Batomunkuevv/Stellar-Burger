import { getOrderRequest } from "../../../utils/burger-api";
import { ConstructorTypes } from "../constructor/actions";
import { IngredientsTypes } from "../ingredients/actions";

export const name = 'ORDER';

export const OrderDetailsTypes = {
    GET_SUCCESS: `${name}/GET_SUCCESS`,
    GET_REQUEST: `${name}/GET_REQUEST`,
    GET_FAILED: `${name}/GET_FAILED`,
    CLEAR: `${name}/CLEAR`,
}

export const getOrder = (ingredients) => {
    return (dispatch) => {
        dispatch({ type: OrderDetailsTypes.GET_REQUEST });

        getOrderRequest(ingredients)
            .then((res) => {
                dispatch({ type: OrderDetailsTypes.GET_SUCCESS, payload: res.order });
                dispatch({ type: ConstructorTypes.CLEAR});
                dispatch({ type: IngredientsTypes.RESET_INGREDIENTS_COUNTERS });
            })
            .catch(() => {
                dispatch({ type: OrderDetailsTypes.GET_FAILED });
            });
    };
};
