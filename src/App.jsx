import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './services/redux/reducers';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);

const App = () => {

    return (
        <>
            <AppHeader />
            <main className="page pt-10">
                <div className="container">
                    <div className="page__wrapper pl-5 pr-5">
                        <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                        <div className="page__body">
                            <Provider store={store}>
                                <DndProvider backend={HTML5Backend}>
                                    <BurgerIngredients />
                                    <BurgerConstructor />
                                </DndProvider>
                            </Provider>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}


export default App;
