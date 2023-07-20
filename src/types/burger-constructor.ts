import { TIngredient } from "./burger-ingredients"

export type TConstructorItems = {
    constructorIngredients: Array<TIngredient>,
    bun: TIngredient
}

export type TConstructorIngredient = TIngredient & {
    handlerId: string;
}

export type TConstructorItem = TConstructorIngredient & {
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    index: number;
}