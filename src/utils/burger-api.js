const NORMA_API = "https://norma.nomoreparties.spacce";

const getIngredients = () => {
    return fetch(`${NORMA_API}/api/ingredients`)
        .then(checkReponse)
        .then((result) => result)
        .catch((error) => {
            console.log(`Произошла ошибка ${error}!`);
        });
};

function checkReponse(response) {
    return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
}

export default getIngredients;
