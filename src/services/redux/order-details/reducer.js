import { OrderDetailsTypes } from "./actions";

const initialStore = {
    order: null,
    orderRequest: false,
    orderFailed: false,
};

export const orderDetailsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case OrderDetailsTypes.GET_SUCCESS: {
            return {
                ...store,
                order: action.payload,
                orderRequest: false,
                orderFailed: false,
            };
        }
        case OrderDetailsTypes.GET_REQUEST: {
            return {
                ...store,
                orderRequest: true,
            };
        }
        case OrderDetailsTypes.GET_FAILED: {
            return {
                ...store,
                orderRequest: false,
                orderFailed: true,
            };
        }
        case OrderDetailsTypes.CLEAR: {
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
