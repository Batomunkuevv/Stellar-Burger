import { getCookie, setCookie } from "./cookie";

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

export const getIngredientRequest = (id) => request(`ingredients/${id}`);

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

export const sendPasswordResetRequest = (email) => {
    const body = {
        email: email
    }

    return request('password-reset', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}

export const sendNewPasswordRequest = (password, token) => {
    const body = {
        "password": password,
        "token": token
    }

    return request('password-reset/reset', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}

export const registerUserRequest = (email, password, name) => {
    const body = {
        "email": email,
        "password": password,
        "name": name
    }

    return request('auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}

export const signInRequest = (email, password) => {
    const body = {
        "email": email,
        "password": password,
    }

    return request('auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}

export const signOutRequest = () => {
    const body = {
        "token": localStorage.getItem('refreshToken'),
    }

    return request('auth/logout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

}

export const getUserRequest = () => {
    const accessToken = getCookie('accessToken');

    return request('auth/user', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    })

}

export const updateUserRequest = (infoName, infoValue) => {
    const accessToken = getCookie('accessToken');

    const body = {
        [infoName]: infoValue
    }

    return request('auth/user', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
    })
}

export const updateTokenRequest = () => {
    const body = {
        token: localStorage.getItem('refreshToken')
    }

    return request('auth/token', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}

export const saveTokens = (accessToken, refreshToken) => {
    setCookie('accessToken', accessToken.split(' ')[1]);
    localStorage.setItem('refreshToken', refreshToken);
}

export const removeTokens = () => {
    setCookie('accessToken', '', 0);
    localStorage.removeItem('refreshToken');
}