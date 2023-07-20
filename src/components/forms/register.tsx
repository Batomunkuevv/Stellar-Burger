import styles from './form.module.css'
import classNames from 'classnames';
import useForm from '../../hooks/use-form';
import { useNavigate } from 'react-router-dom';
import { registerUserRequest } from '../../utils/burger-api';

import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { FC, FormEvent } from 'react';

const RegisterForm: FC = () => {
    const navigate = useNavigate();

    const { values, handleChange } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        registerUserRequest(values.email, values.password, values.name).then(res => {
            if (res.success) navigate('/login');
        });
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className={styles.form}>
            <div className="mb-6 text text_type_main-medium">
                Регистрация
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <Input
                    onChange={handleChange}
                    value={values.name}
                    type={'text'}
                    placeholder={'Имя'}
                    name={'name'}
                    errorText={'Ой, произошла ошибка!'}
                    size={'default'}
                    extraClass={styles.form__item}
                />
                <EmailInput
                    onChange={handleChange}
                    value={values.email}
                    name={'email'}
                    isIcon={false}
                    extraClass={styles.form__item}
                />
                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
                    name={'password'}
                    extraClass={styles.form__item}
                />
                <Button htmlType="submit" type="primary" size="medium">
                    Зарегистрироваться
                </Button>
            </div>
            <div className={classNames(styles.form__action, 'text', 'text_type_main-default')}>
                <span className="text_color_inactive">Уже зарегистрированы?</span>
                <Link to={'/login'} className={styles['form__action-link']}>
                    Войти
                </Link>
            </div>
        </form>
    )
}

export default RegisterForm;