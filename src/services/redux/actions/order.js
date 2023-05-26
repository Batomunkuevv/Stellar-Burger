import { getOrderRequest } from "../../../utils/burger-api";

export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const getOrder = (ingredients) => {
    return (dispatch) => {
        dispatch({ type: GET_ORDER_REQUEST });

        getOrderRequest(ingredients)
            .then((res) => {
                dispatch({ type: GET_ORDER_SUCCESS, payload: res });
            })
            .catch(() => {
                dispatch({ type: GET_ORDER_FAILED });
            });
    };
};
