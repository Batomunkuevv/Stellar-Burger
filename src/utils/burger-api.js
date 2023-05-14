const NORMA_API = "https://norma.nomoreparties.space";

export const getIngredients = async () => {
    let response = await fetch(`${NORMA_API}/api/ingredients`);

    let result = await checkReponse(response);

    if (result?.success) return result.data;

    return Promise.reject(result);
};

export const getOrderNumber = async (constructorIngredients) => {
    const ingredientsIds = constructorIngredients.map((ingredient) => ingredient._id);

    const body = {
        ingredients: ingredientsIds,
    };

    let response = await fetch(`${NORMA_API}/api/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    let result = await checkReponse(response);

    if (result?.success) return result.order.number;

    return Promise.reject(result);
};

function checkReponse(response) {
    return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
}
