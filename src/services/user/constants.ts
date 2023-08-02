export const name = "USER";

type TUserTypes = {
    SIGN_IN_REQUEST: `${typeof name}/SIGN_IN_REQUEST`,
    SIGN_IN_FAILED: `${typeof name}/SIGN_IN_FAILED`,
    SIGN_IN_SUCCESS: `${typeof name}/SIGN_IN_SUCCESS`,
    SIGN_OUT_REQUEST: `${typeof name}/SIGN_OUT_REQUEST`,
    SIGN_OUT_FAILED: `${typeof name}/SIGN_OUT_FAILED`,
    SIGN_OUT_SUCCESS: `${typeof name}/SIGN_OUT_SUCCESS`,
    UPDATE_REQUEST: `${typeof name}/UPDATE_REQUEST`,
    UPDATE_FAILED: `${typeof name}/UPDATE_FAILED`,
    UPDATE_SUCCESS: `${typeof name}/UPDATE_SUCCESS`,
    GET_SUCCESS: `${typeof name}/GET_SUCCESS`,
    GET_REQUEST: `${typeof name}/GET_REQUEST`,
    GET_FAILED: `${typeof name}/GET_FAILED`,
    AUTH_CHECKED: `${typeof name}/AUTH_CHECKED`,
}

export const UserTypes: TUserTypes = {
    SIGN_IN_REQUEST: `${name}/SIGN_IN_REQUEST`,
    SIGN_IN_FAILED: `${name}/SIGN_IN_FAILED`,
    SIGN_IN_SUCCESS: `${name}/SIGN_IN_SUCCESS`,
    SIGN_OUT_REQUEST: `${name}/SIGN_OUT_REQUEST`,
    SIGN_OUT_FAILED: `${name}/SIGN_OUT_FAILED`,
    SIGN_OUT_SUCCESS: `${name}/SIGN_OUT_SUCCESS`,
    UPDATE_REQUEST: `${name}/UPDATE_REQUEST`,
    UPDATE_FAILED: `${name}/UPDATE_FAILED`,
    UPDATE_SUCCESS: `${name}/UPDATE_SUCCESS`,
    GET_SUCCESS: `${name}/GET_SUCCESS`,
    GET_REQUEST: `${name}/GET_REQUEST`,
    GET_FAILED: `${name}/GET_FAILED`,
    AUTH_CHECKED: `${name}/AUTH_CHECKED`,
};
