export const NORMA_API = "https://norma.nomoreparties.space/api/";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
    if (res && res.success) {
        return res;
    }

    return Promise.reject(`Ответ не success: ${res}`);
};

const request = (endpoint, options) => {
    return fetch(`${NORMA_API}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess);
};

export const getIngredientsRequest = () => request('ingredients');


export const getOrderRequest = (constructorIngredients) => {
    const ingredientsIds = constructorIngredients?.map((ingredient) => ingredient._id);

    const body = {
        ingredients: ingredientsIds,
    };

    return request('orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
}