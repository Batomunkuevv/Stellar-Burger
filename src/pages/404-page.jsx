import image404 from '../images/404.png';
import styles from './404-page.module.css';

const NotFound404Page = () => {
    return (
        <div className='error-404'>
            <img src={image404} alt="404" title='404'/>
        </div>
    )
}

export default NotFound404Page;