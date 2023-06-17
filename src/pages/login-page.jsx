import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import LoginForm from "../components/forms/login";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const fromPage = location.state?.from?.pathname || '/';
    const { user } = useSelector(store => store.auth);

    useEffect(() => {
        if (user) navigate(fromPage, { replace: true });
    }, [user, navigate, fromPage])

    return (
        <>
            <h1 className="visually-hidden">Войдите в аккаунт</h1>
            <LoginForm fromPage={fromPage} />
        </>
    )
}

export default LoginPage;