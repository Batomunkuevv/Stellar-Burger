import { TOrder } from "../../types";
import { TWSUserActions } from "./actions";
import { UserOrdersWsTypes as Types } from "./constants";

type TWsStore = {
    wsConnected: boolean;
    orders: TOrder[];
    error?: Event;
};

const initialStore: TWsStore = {
    wsConnected: false,
    orders: [],
};

export const wsUserOrdersReducer = (store = initialStore, action: TWSUserActions): TWsStore => {
    switch (action.type) {
        case Types.CONNECTION_START: {
            return {
                ...store,
                wsConnected: true,
                error: undefined,
            };
        }
        case Types.CONNECTION_ERROR: {
            return {
                ...store,
                wsConnected: false,
                error: action.payload,
            };
        }
        case Types.CONNECTION_CLOSED: {
            return {
                ...store,
                wsConnected: false,
                error: undefined,
            };
        }
        case Types.GET_MESSAGE: {

            return {
                ...store,
                error: undefined,
                orders: [...action.payload.orders.reverse()],
            };
        }
        default: {
            return store;
        }
    }
};
