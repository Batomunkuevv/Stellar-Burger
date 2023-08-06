import { FC } from "react";
import ForgotPasswordForm from "../../components/forms/forgot-password";

const ForgotPasswordPage: FC = () => {
    return (
        <>
            <h1 className="visually-hidden">Восстановление пароля</h1>
            <ForgotPasswordForm />
        </>
    )
}

export default ForgotPasswordPage;