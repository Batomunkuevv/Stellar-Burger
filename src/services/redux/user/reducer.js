import { UserTypes } from './actions';

const initialStore = {
    signInFailed: false,
    signInRequest: false,
    signOutRequest: false,
    signOutFailed: false,
    updateFailed: false,
    updateRequest: false,
    getRequest: false,
    data: null,
    isAuthChecked: false
};

export const userReducer = (store = initialStore, action) => {
    switch (action.type) {
        case UserTypes.AUTH_CHECKED:{
            return{
                ...store,
                isAuthChecked: true
            }
        }
        case UserTypes.GET_REQUEST:{
            return{
                ...store,
                getRequest: true,
            }
        }
        case UserTypes.GET_SUCCESS:{
            return{
                ...store,
                getRequest: false,
                data: action.payload
            }
        }
        case UserTypes.SIGN_IN_REQUEST: {
            return {
                ...store,
                signInRequest: true,
                signInFailed: false
            }
        }
        case UserTypes.SIGN_IN_FAILED: {
            return {
                ...store,
                signInRequest: false,
                signInFailed: true
            }
        }
        case UserTypes.SIGN_IN_SUCCESS: {
            return {
                ...store,
                signInRequest: false,
                signInFailed: false,
                data: action.payload
            }
        }
        case UserTypes.SIGN_OUT_REQUEST: {
            return {
                ...store,
                signOutRequest: true,
                signOutFailed: false
            }
        }
        case UserTypes.SIGN_OUT_FAILED: {
            return {
                ...store,
                signOutRequest: false,
                signOutFailed: true
            }
        }
        case UserTypes.SIGN_OUT_SUCCESS: {
            return {
                ...store,
                signOutFailed: false,
                signOutRequest: false,
                data: initialStore.user
            }
        }
        case UserTypes.UPDATE_REQUEST:{
            return{
                ...store,
                updateFailed: false,
                updateRequest: true,
            }
        }
        case UserTypes.UPDATE_FAILED:{
            return{
                ...store,
                updateFailed: true,
                updateRequest: false,
            }
        }
        case UserTypes.UPDATE_SUCCESS:{
            return{
                ...store,
                updateFailed: false,
                updateRequest: false,
                data: action.payload.user
            }
        }
        default: {
            return store;
        }
    }
};
