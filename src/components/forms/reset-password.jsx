import styles from './form.module.css'
import classNames from 'classnames';
import { sendNewPasswordRequest } from '../../utils/burger-api';

import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from 'react';

const ResetPasswordForm = () => {
    const [inputs, setInputs] = useState({
        code: '',
        password: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { code, password } = inputs;

        sendNewPasswordRequest(password, code).then(res => {
            console.log(res);
        })
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
                Восстановление пароля
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <PasswordInput
                    onChange={handleChange}
                    value={inputs.password}
                    placeholder='Введите новый пароль'
                    name={'password'}
                    extraClass={styles.form__item}
                />
                <Input
                    onChange={handleChange}
                    value={inputs.code}
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    name={'code'}
                    errorText={'Ой, произошла ошибка!'}
                    size={'default'}
                    extraClass={styles.form__item}
                />
                <Button htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
            <div className={classNames(styles.form__action, 'text', 'text_type_main-default')}>
                <span className="text_color_inactive">Вспомнили пароль?</span>
                <Link to={'/login'} className={styles['form__action-link']}>
                    Войти
                </Link>
            </div>
        </form>
    )
}

export default ResetPasswordForm;