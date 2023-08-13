export type TOrder = {
    ingredients: string[];
    _id: string;
    status: 'done' | 'created' | 'pending';
    number: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    isPersonal?: boolean;
};