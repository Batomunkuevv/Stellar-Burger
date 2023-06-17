import { DndTypes } from "./actions"

const initialStore = {
    draggedIngredient: null,
}

export const dndReducer = (store = initialStore, action) => {
    switch (action.type) {
        case DndTypes.SET_DRAGGED_INGREDIENT: {
            return {
                draggedIngredient: action.payload
            }
        }
        case DndTypes.CLEAR_DRAGGED_INGREDIENT: {
            return {
                draggedIngredient: initialStore.draggedIngredient
            }
        }
        default: {
            return store;
        }
    }
}