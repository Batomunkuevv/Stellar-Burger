import { orderDetailsReducer as reducer } from './reducer';
import { OrderDetailsTypes as types } from './constants';

describe('order details reducer', () => {
    it('should return the initial store', () => {
        const result = reducer(undefined, { type: '' })
        const equalResult = {
            order: null,
            orderRequest: false,
            orderFailed: false
        }

        expect(result).toEqual(equalResult);
    })

    it('should send request', () => {
        const action = { type: types.GET_REQUEST };
        const store = {
            orderRequest: false
        }

        const result = reducer(store, action);

        expect(result.orderRequest).toBe(true);
    })

    it('should get failed', () => {
        const action = { type: types.GET_FAILED };
        const store = {
            orderFailed: false
        }

        const result = reducer(store, action);

        expect(result.orderFailed).toBe(true);
    })

    it('should clear order', () => {
        const action = { type: types.CLEAR };
        const store = {
            order: ''
        }

        const result = reducer(store, action);

        expect(result.order).toEqual(null);
    })

    it('should get order', () => {
        const action = { type: types.GET_SUCCESS, payload: 'order' };
        const store = {
            order: null,
            orderRequest: true,
            orderFailed: false,
        }

        const result = reducer(store, action);
        const equalResult = {
            order: 'order',
            orderRequest: false,
            orderFailed: false,
        }

        expect(result).toEqual(equalResult);
    })
})
