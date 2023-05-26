import { getOrderRequest } from "../../../utils/burger-api";
import { CLEAR_CONSTRUCTOR } from './constructor';
import { RESET_INGREDIENTS_COUNTERS } from './ingredients';


export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const getOrder = (ingredients) => {
    return (dispatch) => {
        dispatch({ type: GET_ORDER_REQUEST });

        getOrderRequest(ingredients)
            .then((res) => {
                dispatch({ type: GET_ORDER_SUCCESS, payload: res.order });
                dispatch({ type: CLEAR_CONSTRUCTOR});
                dispatch({ type: RESET_INGREDIENTS_COUNTERS });
            })
            .catch(() => {
                dispatch({ type: GET_ORDER_FAILED });
            });
    };
};
