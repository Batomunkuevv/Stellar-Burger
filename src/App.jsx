import { useEffect, useState } from 'react';
import { getIngredients } from './utils/burger-api';
import AppContext from './utils/appContext';
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

const App = () => {
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsIsloading, setIngredientsLoading] = useState(true);

    useEffect(() => {
        getIngredients()
            .then(setIngredients)
            .catch(() => alert('Во время загрузки ингредиентов произошла ошибка'))
            .finally(() => setIngredientsLoading(false))
    }, [])

    return (
        <>
            <AppHeader />
            <main className="page">
                <div className="container">
                    {ingredientsIsloading ? 'Загрузка...' : (
                        <div className="page__body pl-5 pr-5">
                            <AppContext.Provider value={ingredients}>
                                <BurgerIngredients />
                                <BurgerConstructor />
                            </AppContext.Provider>
                        </div>
                    )}
                </div>
            </main>
        </>
    );

}


export default App;
