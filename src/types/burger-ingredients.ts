import { RefObject } from "react";

export type TIngredientsCategory = {
    last?: boolean;
    ingredients: TIngredient[];
    title: string;
    nameTab: string;
}

export type TIngredient = {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: "bun" |"main" |"sauce";
    __v: number;
    _id: string;
}

export type TIngredientWithCount = TIngredient & {
    count: number;
}

export type TTitleRef = {
    name: string;
    title: RefObject<HTMLHeadingElement>;
}

