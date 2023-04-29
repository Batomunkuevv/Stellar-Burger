import React from "react";
import appHeaderStyles from "./app-header.module.css";
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
    render() {
        return (
            <header className={`${appHeaderStyles.header}`}>
                <div className="container">
                    <div className={`${appHeaderStyles.header__body} pt-4 pb-4`}>
                        <a href="#" className={`${appHeaderStyles.header__link} mr-2  pt-4 pb-4 pl-5 pr-5`}>
                            <BurgerIcon type="primary" />
                            <span className="text text_type_main-default">Конструктор</span>
                        </a>
                        <a href="#" className={`${appHeaderStyles.header__link}  pt-4 pb-4 pl-5 pr-5`}>
                            <ListIcon type="secondary" />
                            <span className=" text text_type_main-default text_color_inactive">Лента заказов</span>
                        </a>
                        <Logo />
                        <a href="#" className={`${appHeaderStyles.header__link} ${appHeaderStyles.header__link_profile} pt-4 pb-4 pl-5 pr-5 `}>
                            <ProfileIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;
