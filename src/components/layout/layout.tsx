import { Outlet } from "react-router-dom"
import styles from './layout.module.css';
import AppHeader from "../app-header/app-header"
import { FC } from "react";

const Layout: FC = () => {
    return (
        <>
            <AppHeader />
            <main className={styles.page}>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Layout;