import { SET_DRAGGED_INGREDIENT, CLEAR_DRAGGED_INGREDIENT } from '../actions/dnd';

const initialStore = {
    draggedIngredient: null,
}

export const dndReducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_DRAGGED_INGREDIENT: {
            return {
                draggedIngredient: action.payload
            }
        }
        case CLEAR_DRAGGED_INGREDIENT: {
            return {
                draggedIngredient: initialStore.draggedIngredient
            }
        }
        default: {
            return store;
        }
    }
}