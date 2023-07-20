import classNames from "classnames";
import styles from "./profile.module.css";
import { FC } from 'react';

import { signOut } from "../../services/redux/user/actions";
import { useDispatch } from "react-redux";

import { NavLink, useNavigate, Outlet } from "react-router-dom";

const Profile: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setClassesFormLinks = ({ isActive }: { isActive: boolean }): string => {
        let classes = [styles.profile__link, "text", "text_type_main-medium", "text_color_inactive"];

        if (isActive) classes.push(styles["is-active"]);

        return classNames(classes);
    };

    const handleSignOutBtn = () => {
        dispatch(signOut(() => navigate("/login", { replace: true })) as any);
    };

    return (
        <div className={classNames(styles.profile, "pl-5", "pr-5")}>
            <div className={styles.profile__left}>
                <div className={classNames(styles.profile__links, "mb-20")}>
                    <NavLink className={setClassesFormLinks} to="/profile" end>
                        Профиль
                    </NavLink>
                    <NavLink className={setClassesFormLinks} to="orders">
                        История заказов
                    </NavLink>
                    <button onClick={handleSignOutBtn} type="button" className={classNames(styles.profile__link, "text", "text_type_main-medium", "text_color_inactive")}>
                        Выход
                    </button>
                </div>
                <p className="text text_type_main-default text_color_inactive">
                    В этом разделе вы можете
                    <br />
                    изменить свои персональные данные
                </p>
            </div>
            <Outlet />
        </div>
    );
};

export default Profile;
