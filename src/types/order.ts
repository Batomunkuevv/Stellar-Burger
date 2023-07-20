import { TIngredient } from "./burger-ingredients"

export type TOrder = {
    ingredients: TIngredient[];
    _id: string;
    ovner: {
        name: string;
        email: string;
        creaatedAt: string;
        updatedAt: string;
    };
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
}
