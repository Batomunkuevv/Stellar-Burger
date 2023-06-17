import MainPage from "./main-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
import ForgotPasswordPage from "./forgot-password-page";
import ResetPasswordPage from "./reset-password-page";
import ProfilePage from "./profile-page";
import IngredientPage from "./ingredient-page";
import NotFound404Page from "./404-page";

const pages = {
    main: MainPage,
    login: LoginPage,
    register: RegisterPage,
    forgotPassword: ForgotPasswordPage,
    resetPassword: ResetPasswordPage,
    profile: ProfilePage,
    ingredient: IngredientPage,
    notFound404: NotFound404Page,
}

export default pages;
export {  MainPage };
