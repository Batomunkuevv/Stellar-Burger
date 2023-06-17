import styles from './form.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../services/redux/user/actions';

import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const LoginForm = ({ fromPage }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { email, password } = inputs;

        dispatch(signIn(email, password, () => navigate(fromPage, { replace: true })));
    }

    const handleChange = (e) => {
        const input = e.target;

        setInputs({
            ...inputs,
            [input.name]: input.value
        });
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className={styles.form}>
            <div className="mb-6 text text_type_main-medium">
                Вход
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <EmailInput
                    onChange={handleChange}
                    value={inputs.email}
                    name={'email'}
                    isIcon={false}
                    extraClass={styles.form__item}
                />

                <PasswordInput
                    onChange={handleChange}
                    value={inputs.password}
                    name={'password'}
                    extraClass={styles.form__item}
                />
                <Button htmlType="submit" type="primary" size="medium">
                    Войти
                </Button>
            </div>
            <div className={classNames(styles.form__action, 'mb-4', 'text', 'text_type_main-default')}>
                <span className="text_color_inactive">Вы — новый пользователь?</span>
                <Link to={'/register'} className={styles['form__action-link']}>
                    Зарегистрироваться
                </Link>
            </div>
            <div className={classNames(styles.form__action, 'text', 'text_type_main-default')}>
                <span className="text_color_inactive">Забыли пароль?</span>
                <Link to={'/forgot-password'} className={styles['form__action-link']}>
                    Восстановить пароль
                </Link>
            </div>
        </form>
    )
}

export default LoginForm;