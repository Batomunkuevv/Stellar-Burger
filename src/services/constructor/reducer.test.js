import { constructorReducer as reducer } from './reducer';
import { ConstructorTypes as types } from './constants';

describe('burger constructor reducer', () => {
    it('should return the initial store', () => {
        const result = reducer(undefined, { type: '' });
        const equalResult = {
            constructorIngredients: [],
            bun: null
        }

        expect(result).toEqual(equalResult);
    })

    it('should clear store', () => {
        const ingredient = 'ingredient'
        const action = { type: types.CLEAR };
        const store = {
            constructorIngredients: [ingredient],
            bun: ingredient
        }
        const result = reducer(store, action);
        const equalResult = {
            constructorIngredients: [],
            bun: null
        }

        expect(result).toEqual(equalResult);
    })

    it('should update ingredients', () => {
        const ingredient = 'ingredient'
        const action = { type: types.UPDATE_LIST, payload: [ingredient] }
        const store = {
            constructorIngredients: [ingredient],
        }

        const result = reducer(store, action);

        expect(result.constructorIngredients).toEqual([ingredient]);
    })

    it('should add bun', () => {
        const ingredient = 'ingredient'
        const action = { type: types.ADD_BUN, payload: ingredient };
        const store = {
            bun: null
        }
        const result = reducer(store, action);

        expect(result.bun).toBe(ingredient);
    })

    it('should remove ingredient', () => {
        const ingredient = {
            calories: 1,
            carbohydrates: 1,
            fat: 1,
            image: '',
            image_large: '',
            image_mobile: '',
            name: 'name',
            price: 123,
            proteins: 1,
            type: 'bun',
            __v: 123,
            _id: 1234,
            handlerId: 1234
        }
        const action = { type: types.REMOVE_INGREDIENT, payload: 1234 };
        const store = {
            constructorIngredients: [ingredient]
        }
        const result = reducer(store, action);

        expect(result.constructorIngredients).toEqual([]);
    })

    it('should add ingredient', () => {
        const ingredient = 'ingredient'
        const action = {type: types.ADD_INGREDIENT, payload: ingredient};
        const store = {constructorIngredients: []};
        
        const result = reducer(store, action);

        expect(result.constructorIngredients).toEqual([ingredient]);
    })
}) 