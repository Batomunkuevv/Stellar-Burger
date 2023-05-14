import { useEffect, useState } from 'react';
import getIngredients from './utils/burger-api';
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

const App = () => {
    const [state, setState] = useState({
        hasError: false,
        isLoading: false,
        data: []
    })

    useEffect(() => {
        setState({ ...state, hasError: false, isLoading: true });

        getIngredients()
            .then(result => {
                if(typeof result === 'object'){
                    setState({ ...state, data: result.data, isLoading: false, hasError: false });
                } else{
                    setState({ ...state, isLoading: false, hasError: true });
                }
            })
            ;
    }, [])

    const { data, isLoading, hasError } = state;

    return (
        <>
            <AppHeader />
            <main className="page">
                <div className="container">
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Произошла ошибка'}
                    {!hasError && !isLoading && (
                        <div className="page__body pl-5 pr-5">
                            <BurgerIngredients data={data} />
                            <BurgerConstructor data={data} />
                        </div>
                    )}
                </div>
            </main>
        </>
    );

}


export default App;
