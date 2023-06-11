import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from './app.module.css';

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

const App = () => {

    return (
        <>
            <AppHeader />
            <main className={`${styles.page} pt-10`}>
                <div className="container">
                    <div className="pl-5 pr-5">
                        <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                        <div className={styles.page__body}>
                            <DndProvider backend={HTML5Backend}>
                                <BurgerIngredients />
                                <BurgerConstructor />
                            </DndProvider>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}


export default App;
