import { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ResetPasswordForm from "../components/forms/reset-password";

const ResetPasswordPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const email = location?.state?.email;

        if (!email) navigate('/forgot-password', { replace: true })
    }, [location, navigate])

    return (
        <>
            <h1 className="visually-hidden">Восстановление пароля</h1>
            <ResetPasswordForm />
        </>
    )
}

export default ResetPasswordPage;