import { TOrder } from "../../types";
import { TOrderActions } from "./actions";
import { OrderDetailsTypes } from "./constants";

type TOrderStore = {
    order: TOrder | null;
    orderRequest: boolean;
    orderFailed: boolean;
}

const initialStore: TOrderStore = {
    order: null,
    orderRequest: false,
    orderFailed: false,
};

export const orderDetailsReducer = (store = initialStore, action: TOrderActions): TOrderStore => {
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
