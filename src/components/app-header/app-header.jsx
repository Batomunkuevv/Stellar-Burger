import styles from "./app-header.module.css";
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <div className="container">
                <div className={`${styles.header__body} pt-4 pb-4`}>
                    <a href="#" className={`${styles.header__link} mr-2  pt-4 pb-4 pl-5 pr-5`}>
                        <BurgerIcon type="primary" />
                        <span className="text text_type_main-default">Конструктор</span>
                    </a>
                    <a href="#" className={`${styles.header__link}  pt-4 pb-4 pl-5 pr-5`}>
                        <ListIcon type="secondary" />
                        <span className=" text text_type_main-default text_color_inactive">Лента заказов</span>
                    </a>
                    <Logo />
                    <a href="#" className={`${styles.header__link} ${styles.header__link_profile} pt-4 pb-4 pl-5 pr-5 `}>
                        <ProfileIcon type="secondary" />
                        <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
