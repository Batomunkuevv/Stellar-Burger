import classNames from 'classnames';
import styles from "./app-header.module.css";

import { NavLink } from "react-router-dom";
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    const addClassesToNavLink = ({ isActive }) => {
        const classes = [styles.header__link, 'pt-4', 'pb-4', 'pl-5', 'pr-5'];

        if(isActive) classes.push(styles['is-active']);

        return classNames(classes);
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={classNames(styles.header__body, 'pt-4', 'pb-4')}>
                    <div className={styles.header__left}>
                        <NavLink to='/' className={addClassesToNavLink}>
                            <BurgerIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive">Конструктор</span>
                        </NavLink>
                        <NavLink to='/orders' className={addClassesToNavLink}>
                            <ListIcon type="secondary" />
                            <span className=" text text_type_main-default text_color_inactive">Лента заказов</span>
                        </NavLink>
                    </div>
                    <Logo />
                    <NavLink to='/profile' className={addClassesToNavLink}>
                        <ProfileIcon type="secondary" />
                        <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
