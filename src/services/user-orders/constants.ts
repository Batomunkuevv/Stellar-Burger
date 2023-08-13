export const name = "WS_USER_ORDERS";

type TUserOrdersWsTypes = {
    CONNECTION_START: `${typeof name}/CONNECTION_START`,
    CONNECTION_SUCCESS: `${typeof name}/CONNECTION_SUCCESS`,
    CONNECTION_ERROR: `${typeof name}/CONNECTION_ERROR`,
    CONNECTION_CLOSED: `${typeof name}/CONNECTION_CLOSED`,
    GET_MESSAGE: `${typeof name}/GET_MESSAGE`,
    SEND_MESSAGE: `${typeof name}/SEND_MESSAGE`,
};

export const UserOrdersWsTypes: TUserOrdersWsTypes = {
    CONNECTION_START: `${name}/CONNECTION_START`,
    CONNECTION_SUCCESS: `${name}/CONNECTION_SUCCESS`,
    CONNECTION_ERROR: `${name}/CONNECTION_ERROR`,
    CONNECTION_CLOSED: `${name}/CONNECTION_CLOSED`,
    GET_MESSAGE: `${name}/GET_MESSAGE`,
    SEND_MESSAGE: `${name}/SEND_MESSAGE`,
};