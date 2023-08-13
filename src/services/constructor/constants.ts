export const name = "CONSTRUCTOR";

type TConstructorTypes = {
    ADD_INGREDIENT: `${typeof name}/ADD_INGREDIENT`;
    REMOVE_INGREDIENT: `${typeof name}/REMOVE_INGREDIENT`;
    ADD_BUN: `${typeof name}/ADD_BUN`;
    UPDATE_LIST: `${typeof name}/UPDATE_LIST`;
    CLEAR: `${typeof name}/CLEAR`;
};

export const ConstructorTypes: TConstructorTypes = {
    ADD_INGREDIENT: `${name}/ADD_INGREDIENT`,
    REMOVE_INGREDIENT: `${name}/REMOVE_INGREDIENT`,
    ADD_BUN: `${name}/ADD_BUN`,
    UPDATE_LIST: `${name}/UPDATE_LIST`,
    CLEAR: `${name}/CLEAR`,
};
