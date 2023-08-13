export const name = "INGREDIENTS";

type TIngredientsTypes = {
    GET_REQUEST: `${typeof name}/GET_REQUEST`,
    GET_FAILED: `${typeof name}/GET_FAILED`,
    GET_SUCCESS: `${typeof name}/GET_SUCCESS`,
}

export const IngredientsTypes: TIngredientsTypes = {
    GET_REQUEST: `${name}/GET_REQUEST`,
    GET_FAILED: `${name}/GET_FAILED`,
    GET_SUCCESS: `${name}/GET_SUCCESS`,
};
