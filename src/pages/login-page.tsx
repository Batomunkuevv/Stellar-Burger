import { FC } from "react";
import LoginForm from "../components/forms/login";

const LoginPage: FC = () => {
    return (
        <>
            <h1 className="visually-hidden">Войдите в аккаунт</h1>
            <LoginForm />
        </>
    );
};

export default LoginPage;
