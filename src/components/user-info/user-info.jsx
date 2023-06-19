import styles from './user-info.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, } from "react-redux";
import { updateUser } from "../../services/redux/user/actions";
import { getUser } from '../../services/redux/user/selectors';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from '../../hooks/use-form';


const UserInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const [isVisibleButtons, setVisibleButtons] = useState(false);

    let { values, handleChange, setValues } = useForm({
        'name': user.name,
        'email': user.email,
        'password': ''
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch(updateUser(values))
        setVisibleButtons(false);
    }

    handleChange = event => {
        const { value, name } = event.target;

        if (user[name] !== value) {
            setVisibleButtons(true);
        } else {
            setVisibleButtons(false);
        }

        setValues({ ...values, [name]: value });
    };

    const handleCancelChanging = () => {
        setVisibleButtons(false);
        setValues({
            ...values,
            'name': user.name,
            'email': user.email,
            'password': 'example'
        })
    }

    return (
        <form action='#' onSubmit={handleFormSubmit} className="user-info">
            <div className='user-info__body mb-10'>
                <Input
                    value={values.name}
                    onChange={handleChange}
                    type={'text'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    name='name'
                    size={'default'}
                    extraClass={classNames(styles['user-info__item'], 'mb-6')}
                />
                <Input
                    value={values.email}
                    onChange={handleChange}
                    type={'email'}
                    placeholder={'Логин'}
                    icon={'EditIcon'}
                    name='email'
                    size={'default'}
                    extraClass={classNames(styles['user-info__item'], 'mb-6',)}
                />
                <Input
                    value={values.password}
                    onChange={handleChange}
                    type={'password'}
                    placeholder={'Пароль'}
                    icon={'EditIcon'}
                    name='password'
                    size={'default'}
                    extraClass={styles['user-info__item']}
                />
            </div>
            <div className={classNames(styles['user-info__buttons'], { [styles['is-visible']]: isVisibleButtons })}>
                <Button htmlType="button" onClick={handleCancelChanging} type="secondary" size="medium">
                    Отменить
                </Button>
                <Button htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </form>
    )
}

export default UserInfo;