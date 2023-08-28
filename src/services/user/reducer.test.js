import { userReducer as reducer } from "./reducer";
import { UserTypes as types } from "./constants";

describe('user reducer', () => {
    it('should return the initial store', () => {
        const result = reducer(undefined, { type: '' });
        const equalResult = {
            signInFailed: false,
            signInRequest: false,
            signOutRequest: false,
            signOutFailed: false,
            updateFailed: false,
            updateRequest: false,
            getRequest: false,
            data: null,
            isAuthChecked: false
        }

        expect(result).toEqual(equalResult);
    })

    it('should return check auth', () => {
        const action = { type: types.AUTH_CHECKED }
        const store = {
            isAuthChecked: false
        }

        const result = reducer(store, action);

        expect(result.isAuthChecked).toBe(true);
    })

    it('should get request', () => {
        const action = { type: types.GET_REQUEST };
        const store = {
            getRequest: true,
        }

        const result = reducer(store, action);

        expect(result.getRequest).toBe(true);
    })

    it('should get success', () => {
        const action = { type: types.GET_SUCCESS, payload: 'user' };
        const store = {
            getRequest: true,
            data: null
        }

        const result = reducer(store, action);
        const equalResult = {
            getRequest: false,
            data: 'user'
        }

        expect(result).toEqual(equalResult);
    })

    it('should sign in request', () => {
        const action = { type: types.SIGN_IN_REQUEST };
        const store = {
            signInRequest: false,
            signInFailed: false
        }

        const result = reducer(store, action);
        const equalResult = {
            signInRequest: true,
            signInFailed: false,
        }

        expect(result).toEqual(equalResult);
    })

    it('should sign in failed', () => {
        const action = { type: types.SIGN_IN_FAILED };
        const store = {
            signInRequest: false,
            signInFailed: false
        }

        const result = reducer(store, action);
        const equalResult = {
            signInRequest: false,
            signInFailed: true,
        }

        expect(result).toEqual(equalResult);
    })

    it('should sign in success', () => {
        const action = { type: types.SIGN_IN_SUCCESS };
        const store = {
            signInRequest: true,
            signInFailed: false,
            data: null
        }

        const result = reducer(store, action);
        const equalResult = {
            signInRequest: false,
            signInFailed: false,
            data: action.payload
        }

        expect(result).toEqual(equalResult);
    })

    it('should sign out request', () => {
        const action = { type: types.SIGN_OUT_REQUEST };
        const store = {
            signOutRequest: false,
            signOutFailed: false
        }

        const result = reducer(store, action);
        const equalResult = {
            signOutRequest: true,
            signOutFailed: false
        }

        expect(result).toEqual(equalResult);
    })


    it('should sign out failed', () => {
        const action = { type: types.SIGN_OUT_FAILED };
        const store = {
            signOutRequest: false,
            signOutFailed: false
        }

        const result = reducer(store, action);
        const equalResult = {
            signOutRequest: false,
            signOutFailed: true,
        }

        expect(result).toEqual(equalResult);
    })

    it('should sign out success', () => {
        const action = { type: types.SIGN_OUT_SUCCESS };
        const store = {
            data: 'user'
        }

        const result = reducer(store, action);

        expect(result.data).toBe(null);
    })

    it('should update request', () => {
        const action = { type: types.UPDATE_REQUEST };
        const store = {
            updateFailed: false,
            updateRequest: false,
        }

        const result = reducer(store, action);
        const equalResult = {
            updateFailed: false,
            updateRequest: true,
        }

        expect(result).toEqual(equalResult);
    })

    it('should update failed', () => {
        const action = { type: types.UPDATE_FAILED };
        const store = {
            updateFailed: false,
            updateRequest: false,
        }

        const result = reducer(store, action);
        const equalResult = {
            updateFailed: true,
            updateRequest: false,
        }

        expect(result).toEqual(equalResult);
    })

    it('should update success', () => {
        const action = { type: types.UPDATE_SUCCESS, payload: { user: 'user' } };
        const store = {
            updateFailed: false,
            updateRequest: false,
            data: null
        }

        const result = reducer(store, action);
        const equalResult = {
            updateFailed: false,
            updateRequest: false,
            data: 'user'
        }

        expect(result).toEqual(equalResult);
    })
})