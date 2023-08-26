export const name = 'ORDER';

type TOrderDetailsTypes = {
    GET_SUCCESS: `${typeof name}/GET_SUCCESS`,
    GET_REQUEST: `${typeof name}/GET_REQUEST`,
    GET_FAILED: `${typeof name}/GET_FAILED`,
    CLEAR: `${typeof name}/CLEAR`,
}

export const OrderDetailsTypes: TOrderDetailsTypes = {
    GET_SUCCESS: `${name}/GET_SUCCESS`,
    GET_REQUEST: `${name}/GET_REQUEST`,
    GET_FAILED: `${name}/GET_FAILED`,
    CLEAR: `${name}/CLEAR`,
}