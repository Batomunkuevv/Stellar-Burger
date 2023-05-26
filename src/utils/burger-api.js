const NORMA_API = "https://norma.nomoreparties.space";

export const getIngredientsRequest = async () => {
    const response = await fetch(`${NORMA_API}/api/ingredients`);

    const result = await checkReponse(response);

    if (result?.success) return result.data;

    return Promise.reject(result);
};

export const getOrderRequest = async (constructorIngredients) => {
    const ingredientsIds = constructorIngredients?.map((ingredient) => ingredient._id);

    const body = {
        ingredients: ingredientsIds,
    };
    
    const response = await fetch(`${NORMA_API}/api/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const result = await checkReponse(response);

    if (result?.success) return result.order;

    return Promise.reject(result);
};

function checkReponse(response) {
    return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
}

