import { FC } from "react";
import RegisterForm from "../../components/forms/register";

const RegisterPage: FC = () => {
    return (
        <>
            <h1 className="visually-hidden">Зарегистрируйтесь</h1>
            <RegisterForm />
        </>
    )
}

export default RegisterPage;