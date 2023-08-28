import { ingredientsReducer as reducer } from './reducer';
import { IngredientsTypes as types } from './constants';

describe('ingredients reducer', () => {
    it('should return the initial store', () => {
        const result = reducer(undefined, { type: '' });
        const equalResult = {
            data: [],
            ingredientsFailed: false,
            ingredientsRequest: false,
        };

        expect(result).toEqual(equalResult);
    })

    it('should set ingredients request', () => {
        const action = { type: types.GET_REQUEST };
        const store = {
            data: [],
            ingredientsFailed: false,
            ingredientsRequest: false
        }
        const result = reducer(store, action);

        expect(result.ingredientsRequest).toBe(true);
    })

    it('should set ingredients failed', () => {
        const action = { type: types.GET_FAILED };
        const store = {
            data: [],
            ingredientsFailed: false,
            ingredientsRequest: true
        }
        const result = reducer(store, action);

        expect(result.ingredientsFailed).toBe(true);
    })

    it('should get ingredients', () => {
        const ingredient = 'ingredient'
        const action = {
            type: types.GET_SUCCESS, payload: [ingredient]
        }
        const store = {
            data: [],
            ingredientsRequest: true,
            ingredientsFailed: false
        }
        const equalStore = {
            data: [ingredient],
            ingredientsRequest: false,
            ingredientsFailed: false
        }

        const result = reducer(store, action);

        expect(result).toEqual(equalStore);
    })
}) 