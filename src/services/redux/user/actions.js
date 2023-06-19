import { getUserRequest, removeTokens, saveTokens, signInRequest, signOutRequest, updateUserRequest, updateTokenRequest } from "../../../utils/burger-api";
import { getCookie } from "../../../utils/cookie";
export const name = 'USER';

export const UserTypes = {
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
}


export const signIn = (email, password, callback) => {

    return dispatch => {
        dispatch({ type: UserTypes.SIGN_IN_REQUEST });

        signInRequest(email, password).then(res => {
            const { user, accessToken, refreshToken } = res;
            saveTokens(accessToken, refreshToken);
            dispatch({
                type: UserTypes.SIGN_IN_SUCCESS, payload: user
            });
            callback();
        }).catch(() => {
            dispatch({ type: UserTypes.SIGN_IN_FAILED });
        });
    }
}

export const signOut = (callback) => {
    return dispatch => {
        dispatch({ type: UserTypes.SIGN_OUT_REQUEST });

        signOutRequest().then(res => {
            dispatch({ type: UserTypes.SIGN_OUT_SUCCESS });
            callback();
        }).catch(() => {
            dispatch({ type: UserTypes.SIGN_OUT_FAILED });
        }).finally(() => {
            removeTokens();
        })
    }
}

export const updateUser = (infoName, infoValue) => {
    return dispatch => {
        dispatch({ type: UserTypes.UPDATE_REQUEST });

        updateUserRequest(infoName, infoValue).then(res => {
            dispatch({ type: UserTypes.UPDATE_SUCCESS, payload: res });
        }).catch((error) => {
            if (error === 'Ошибка 403') {
                dispatch(updateToken(updateUser()))
            } else {
                dispatch({ type: UserTypes.UPDATE_FAILED });
            }
        })
    }
}

export const getUser = () => {
    return dispatch => {
        dispatch({ type: UserTypes.GET_REQUEST });

        return getUserRequest().then(res => {
            dispatch({ type: UserTypes.GET_SUCCESS, payload: res.user })
        }).catch((error) => {
            if (error === 'Ошибка 403') {
                dispatch(updateToken(getUser()))
            }
        })
    }
}

export const updateToken = (afterRefresh) => {
    return dispatch => {
        updateTokenRequest().then(res => {
            saveTokens(res.accessToken, res.refreshToken);

            dispatch(afterRefresh);
        })
    }
}


export const checkUserAuth = () => dispatch => {
    if (getCookie('accessToken')) {
        dispatch(getUser()).finally(() => {
            dispatch({ type: UserTypes.AUTH_CHECKED });
        })
    } else {
        dispatch({ type: UserTypes.AUTH_CHECKED });
    }
}