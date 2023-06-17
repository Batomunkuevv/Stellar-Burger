import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from './main-page.module.css'

import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";

const MainPage = () => {
    return (
        <div className="pl-5 pr-5">
            <h1 className="visually-hidden">Соберите свой бургер в Stellar Burgers</h1>
            <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
            <div className={styles['constructor-body']}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </DndProvider>
            </div>
        </div>
    )
}

export default MainPage;