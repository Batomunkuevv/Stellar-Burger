import { wsUserOrdersReducer as reducer } from "./reducer";
import { UserOrdersWsTypes as types } from "./constants";

describe('feed ws reducer', () => {
    it('should return the initial store', () => {
        const result = reducer(undefined, { type: '' });
        const equalResult = {
            wsConnected: false,
            orders: [],
        }

        expect(result).toEqual(equalResult);
    })

    it('should get message', () => {
        const payload = {
            orders: ['order'],
            total: 12,
            totalToday: 2
        }
        const action = { type: types.GET_MESSAGE, payload: payload }
        const store = {
            wsConnected: true,
            orders: [],
        }

        const result = reducer(store, action);
        const equalResult = {
            wsConnected: true,
            orders: ['order'],
            error: undefined
        }

        expect(result).toEqual(equalResult);
    })

    it('should close conection', () => {
        const action = { type: types.CONNECTION_CLOSED }
        const store = {
            wsConnected: true,
        }

        const result = reducer(store, action);
        const equalResult = {
            wsConnected: false,
            error: undefined,
        }

        expect(result).toEqual(equalResult);
    })

    it('should get error connection', () => {
        const action = { type: types.CONNECTION_ERROR, payload: 'Error connection' }
        const store = {
            wsConnected: true,
        }

        const result = reducer(store, action);
        const equalResult = {
            wsConnected: false,
            error: action.payload,
        }

        expect(result).toEqual(equalResult);
    })

    it('should start connection', () => {
        const action = { type: types.CONNECTION_START };
        const store = {
            wsConnected: false
        }

        const result = reducer(store, action);
        const equalResult = {
            wsConnected: true,
            error: undefined
        }

        expect(result).toEqual(equalResult);
    })
})
