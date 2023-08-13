import MainPage from "./main/main";
import LoginPage from "./login/login";
import RegisterPage from "./register/register";
import ForgotPasswordPage from "./forgot-password/forgot-password";
import ResetPasswordPage from "./reset-password/reset-password";
import ProfilePage from "./profile/profile";
import NotFound404Page from "./404/404";
import FeedPage from "./feed/feed";
import OrderPage from "./order/order";

const Pages = {
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

export default Pages;