import styles from './form.module.css'
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { signIn } from '../../services/redux/user/actions';

import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import useForm from '../../hooks/use-form';
import { FC, FormEvent } from 'react';

const LoginForm: FC = () => {

    const dispatch = useDispatch();

    const { values, handleChange } = useForm({
        email: '',
        password: '',
    });

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(signIn(values.email, values.password) as any);
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className={styles.form}>
            <div className="mb-6 text text_type_main-medium">
                Вход
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <EmailInput
                    onChange={handleChange}
                    value={values.email}
                    name='email'
                    isIcon={false}
                    extraClass={styles.form__item}
                />

                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
                    name='password'
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