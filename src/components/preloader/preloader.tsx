import { FC } from "react";
import styles from "./preloader.module.css";
import preloaderImg from "../../images/preloader.svg";

// Types
import { TPreloader } from "../../types";

const Preloader: FC<TPreloader> = ({ extraClass }) => {
    return (
        <div className={`${styles.preloader} ${extraClass ? styles[extraClass] : ''}`}>
            <img src={preloaderImg} alt="Preload" title="preload" />
        </div>
    );
};

export default Preloader;
