import { TIngredient } from "../types";
import { getCookie, setCookie } from "./cookie";

export const NORMA_API = "https://norma.nomoreparties.space/api/";

type TFetchOptions = {
    method?: string;
    headers?: {
        [header: string]: string;
    };
    body?: string;
};

const checkResponse = (res: any) => {
    console.log(res);
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res: any) => {
    if (res && res.success) {
        return res;
    }
    return Promise.reject(`Ответ не success: ${res}`);
};

const request = (endpoint: string, options?: TFetchOptions) => {
    return fetch(`${NORMA_API}${endpoint}`, options).then(checkResponse).then(checkSuccess);
};

export const getIngredientsRequest = () => request("ingredients");

export const getIngredientRequest = (id: string) => request(`ingredients/${id}`);

export const getOrderRequest = (constructorIngredients: Array<TIngredient>) => {
    const ingredientsIds = constructorIngredients?.map((ingredient) => ingredient._id);
    const accessToken = getCookie("accessToken");

    const body = {
        ingredients: ingredientsIds,
    };

    return request("orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
};

export const sendPasswordResetRequest = (email: string) => {
    const body = {
        email: email,
    };

    return request("password-reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const sendNewPasswordRequest = (password: string, token: string) => {
    const body = {
        password: password,
        token: token,
    };

    return request("password-reset/reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const registerUserRequest = (email: string, password: string, name: string) => {
    const body = {
        email: email,
        password: password,
        name: name,
    };

    return request("auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const signInRequest = (email: string, password: string) => {
    const body = {
        email: email,
        password: password,
    };

    return request("auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const signOutRequest = () => {
    const body = {
        token: localStorage.getItem("refreshToken"),
    };

    return request("auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const getUserRequest = () => {
    const accessToken = getCookie("accessToken");

    return request("auth/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

export const updateUserRequest = (values: { [value: string]: string }) => {
    const accessToken = getCookie("accessToken");

    const body = values;

    return request("auth/user", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
};

export const updateTokenRequest = () => {
    const body = {
        token: localStorage.getItem("refreshToken"),
    };

    return request("auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const saveTokens = (accessToken: string, refreshToken: string) => {
    setCookie("accessToken", accessToken.split(" ")[1]);
    localStorage.setItem("refreshToken", refreshToken);
};

export const removeTokens = () => {
    setCookie("accessToken", "", 0);
    localStorage.removeItem("refreshToken");
};
