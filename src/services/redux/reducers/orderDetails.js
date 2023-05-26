import { GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, CLEAR_ORDER } from "../actions/order";

const initialStore = {
    order: null,
    orderRequest: false,
    orderFailed: false,
};

export const orderDetailsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case GET_ORDER_SUCCESS: {
            return {
                ...store,
                order: action.payload,
                orderRequest: false,
                orderFailed: false,
            };
        }
        case GET_ORDER_REQUEST: {
            return {
                ...store,
                orderRequest: true,
            };
        }
        case GET_ORDER_FAILED: {
            return {
                ...store,
                orderRequest: false,
                orderFailed: true,
            };
        }
        case CLEAR_ORDER: {
            return {
                ...store,
                order: initialStore.order
            }
        }
        default: {
            return store;
        }
    }
};
