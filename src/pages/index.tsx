import MainPage from "./main-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
import ForgotPasswordPage from "./forgot-password-page";
import ResetPasswordPage from "./reset-password-page";
import ProfilePage from "./profile-page";
import NotFound404Page from "./404-page";
import FeedPage from "./feed";
import OrderPage from "./order";

const pages = {
    main: MainPage,
    login: LoginPage,
    register: RegisterPage,
    forgotPassword: ForgotPasswordPage,
    resetPassword: ResetPasswordPage,
    profile: ProfilePage,
    notFound404: NotFound404Page,
    feed: FeedPage,
    order: OrderPage
}

export default pages;