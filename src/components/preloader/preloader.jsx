import PropTypes from 'prop-types';
import styles from './preloader.module.css';
import preloaderImg from '../../images/preloader.svg';

const Preloader = ({ extraClass }) => {

    return (
        <div className={`${styles.preloader} ${styles[extraClass]}`}>
            <img src={preloaderImg} alt="Preload" title="preload" />
        </div>
    )
}

Preloader.propTypes ={
    extraClass: PropTypes.string
}

export default Preloader;