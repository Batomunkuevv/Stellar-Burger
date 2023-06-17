import styles from './form.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUserRequest } from '../../utils/burger-api';

import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { email, name, password } = inputs;

        registerUserRequest(email, password, name).then(res => {
            if(res.success) navigate('/login');
        });
    }

    const handeChange = (e) => {
        const input = e.target;

        setInputs({
            ...inputs,
            [input.name]: input.value
        })
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className={styles.form}>
            <div className="mb-6 text text_type_main-medium">
                Регистрация
            </div>
            <div className={classNames(styles.form__body, 'mb-20')}>
                <Input
                    onChange={handeChange}
                    value={inputs.name}
                    type={'text'}
                    placeholder={'Имя'}
                    name={'name'}
                    errorText={'Ой, произошла ошибка!'}
                    size={'default'}
                    extraClass={styles.form__item}
                />
                <EmailInput
                    onChange={handeChange}
                    value={inputs.email}
                    name={'email'}
                    isIcon={false}
                    extraClass={styles.form__item}
                />
                <PasswordInput
                    onChange={handeChange}
                    value={inputs.password}
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