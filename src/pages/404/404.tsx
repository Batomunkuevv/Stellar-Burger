import image404 from '../../images/404.png';
import styles from './404.module.css';

import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

const NotFound404Page: FC = () => {
    return (
        <div className={styles['error-404']}>
            <img className={styles['error-404__background']} src={image404} alt="404" title='404' />
            <div className={styles['error-404__body']}>
                <h1 className='text text_type_main-large mb-10'>Упс! Такая страница не найдена.</h1>
                <Link to='/'>
                    <Button htmlType="button" type="primary" size="medium">
                        На главную
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound404Page;