import styles from './form.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetRequest } from '../../utils/burger-api';

import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        sendPasswordResetRequest(emailValue).then(res => {
            if(res.success){
                navigate('/reset-password', {state: {
                    email: emailValue
                }});
            }
        });
    }

    const handleChange = (e) => {
        setEmailValue(e.target.value);
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className={styles.form}>
            <div className="mb-6 text text_type_main-medium">
                Восстановление пароля
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <EmailInput
                    onChange={handleChange}
                    name='email'
                    value={emailValue}
                    isIcon={false}
                    placeholder='Укажите e-mail'
                    extraClass={styles.form__item}
                />
                <Button htmlType="submit" type="primary" size="medium">
                    Восстановить
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

export default ForgotPasswordForm;