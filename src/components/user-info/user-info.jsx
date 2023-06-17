import { useDispatch } from 'react-redux';
import { useSelector, } from "react-redux";
import { updateUser } from "../../services/redux/user/actions";

import { EmailInput, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";


const UserInfo = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const [inputs, setInputs] = useState({
        'name': user.name,
        'email': user.email,
        'password': 'example'
    });

    const handleChange = (e) => {
        const input = e.target;

        setInputs({
            ...inputs,
            [input.name]: input.value
        });
    }

    const handleBlur = (e) => {
        const input = e.target;

        dispatch(updateUser(input.name, input.value));
    }

    const handleIconClick = (e) => {

    }

    return (
        <div className="profile__info">
            <Input
                value={inputs.name}
                onChange={handleChange}
                onBlur={handleBlur}
                onIconClick={handleIconClick}
                type={'text'}
                placeholder={'Имя'}
                icon={'EditIcon'}
                name='name'
                size={'default'}
                extraClass="profile__info-item mb-6"
            />
            <EmailInput
                value={inputs.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
                placeholder="Логин"
                isIcon={true}
                extraClass="profile__info-item mb-6"
            />
            <PasswordInput
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                icon="EditIcon"
                placeholder="Пароль"
                value={inputs.password}
            />
        </div>
    )
}

export default UserInfo;