import { TUser } from "../../types";
import { getUserRequest, removeTokens, saveTokens, signInRequest, signOutRequest, updateUserRequest, updateTokenRequest } from "../../utils/burger-api";
import { getCookie } from "../../utils/cookie";
import { AppDispatch, AppThunk } from "../types";
import { UserTypes } from "./constants";

export interface ISignInRequestAction {
    type: typeof UserTypes.SIGN_IN_REQUEST;
}

export interface ISignInFailedtAction {
    type: typeof UserTypes.SIGN_IN_FAILED;
}

export interface ISignInSuccessAction {
    type: typeof UserTypes.SIGN_IN_SUCCESS;
    payload: TUser;
}

export interface ISignOutRequestAction {
    type: typeof UserTypes.SIGN_OUT_REQUEST;
}

export interface ISignOutFailedAction {
    type: typeof UserTypes.SIGN_OUT_FAILED;
}

export interface ISignOutSuccessAction {
    type: typeof UserTypes.SIGN_OUT_SUCCESS;
}

export interface IUpdateUserRequestAction {
    type: typeof UserTypes.UPDATE_REQUEST;
}

export interface IUpdateUserFailedAction {
    type: typeof UserTypes.UPDATE_FAILED;
}

export interface IUpdateUserSuccessAction {
    type: typeof UserTypes.UPDATE_SUCCESS;
    payload: {
        user: TUser;
    };
}

export interface IGetUserRequestAction {
    type: typeof UserTypes.GET_REQUEST;
}

export interface IGetUserFailedtAction {
    type: typeof UserTypes.GET_FAILED;
}

export interface IGetUserSuccessAction {
    type: typeof UserTypes.GET_SUCCESS;
    payload: TUser;
}

export interface IAuthCheckAction {
    type: typeof UserTypes.AUTH_CHECKED;
}

export const signIn: AppThunk = (email: string, password: string, callback: any) => {
    return (dispatch: AppDispatch) => {
        dispatch({ type: UserTypes.SIGN_IN_REQUEST });

        signInRequest(email, password)
            .then((res) => {
                const { user, accessToken, refreshToken } = res;
                saveTokens(accessToken, refreshToken);
                dispatch({
                    type: UserTypes.SIGN_IN_SUCCESS,
                    payload: user,
                });
                callback();
            })
            .catch(() => {
                dispatch({ type: UserTypes.SIGN_IN_FAILED });
            });
    };
};

export const signOut: AppThunk = (callback: any) => {
    return (dispatch: AppDispatch) => {
        dispatch({ type: UserTypes.SIGN_OUT_REQUEST });

        signOutRequest()
            .then((res) => {
                dispatch({ type: UserTypes.SIGN_OUT_SUCCESS });
                callback();
            })
            .catch(() => {
                dispatch({ type: UserTypes.SIGN_OUT_FAILED });
            })
            .finally(() => {
                removeTokens();
            });
    };
};

export const updateUser: AppThunk = (values: { [value: string]: string }) => {
    return (dispatch: AppDispatch) => {
        dispatch({ type: UserTypes.UPDATE_REQUEST });

        updateUserRequest(values)
            .then((res) => {
                dispatch({ type: UserTypes.UPDATE_SUCCESS, payload: res });
            })
            .catch((error) => {
                if (error === "Ошибка 403") {
                    dispatch(updateToken(updateUser()) as any);
                } else {
                    dispatch({ type: UserTypes.UPDATE_FAILED });
                }
            });
    };
};

export const getUser: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch({ type: UserTypes.GET_REQUEST });

        return getUserRequest()
            .then((res) => {
                dispatch({ type: UserTypes.GET_SUCCESS, payload: res.user });
            })
            .catch((error) => {
                if (error === "Ошибка 403") {
                    dispatch(updateToken(getUser()) as any);
                }
            });
    };
};

export const updateToken: AppThunk = (afterRefresh: any) => {
    return (dispatch: AppDispatch) => {
        updateTokenRequest().then((res) => {
            saveTokens(res.accessToken, res.refreshToken);

            dispatch(afterRefresh);
        });
    };
};

export const checkUserAuth: AppThunk = () => (dispatch: AppDispatch) => {
    if (getCookie("accessToken")) {
        dispatch(getUser() as any).finally(() => {
            dispatch({ type: UserTypes.AUTH_CHECKED });
        });
    } else {
        dispatch({ type: UserTypes.AUTH_CHECKED });
    }
};

export type TUserActions =
    | IAuthCheckAction
    | IGetUserRequestAction
    | IGetUserFailedtAction
    | IGetUserSuccessAction
    | ISignInRequestAction
    | ISignInFailedtAction
    | ISignInSuccessAction
    | ISignOutRequestAction
    | ISignOutFailedAction
    | ISignOutSuccessAction
    | IUpdateUserRequestAction
    | IUpdateUserFailedAction
    | IUpdateUserSuccessAction;
