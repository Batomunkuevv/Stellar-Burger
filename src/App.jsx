import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

const App = () => {
    const DOMAIN = 'https://norma.nomoreparties.space';

    const [state, setState] = useState({
        hasError: false,
        isLoading: false,
        data: []
    })

    const getIngredients = useCallback(() => {
        setState({ ...state, hasError: false, isLoading: true });

        fetch(`${DOMAIN}/api/ingredients`)
            .then(response => response.json())
            .then(result => setState({ ...state, data: result.data, isLoading: false, hasError: false }))
            .catch(error => {
                setState({ ...state, hasError: true, isLoading: false });
            });
    }, []);

    useEffect(() => {
        getIngredients();
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

BurgerIngredients.propTypes = {
    data: PropTypes.array
}

BurgerConstructor.propTypes = {
    data: PropTypes.array
}

export default App;
