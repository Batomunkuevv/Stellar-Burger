import styles from './form.module.css'
import classNames from 'classnames';
import { sendNewPasswordRequest } from '../../utils/burger-api';
import { useNavigate } from 'react-router-dom';

import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import useForm from '../../hooks/use-form';
import { FC, FormEvent } from 'react';

const ResetPasswordForm: FC = () => {
    const navigate = useNavigate();

    const { values, handleChange } = useForm({
        password: '',
        code: '',
    });

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        sendNewPasswordRequest(values.password, values.code).then(res => {
            navigate('/', { replace: true })
        })
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className={styles.form}>
            <div className="mb-6 text text_type_main-medium">
                Восстановление пароля
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
                    placeholder='Введите новый пароль'
                    name={'password'}
                    extraClass={styles.form__item}
                />
                <Input
                    onChange={handleChange}
                    value={values.code}
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