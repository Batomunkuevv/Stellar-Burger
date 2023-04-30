import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

const App = () => {
    return (
        <>
            <AppHeader />
            <main className="page">
                <div className="container">
                    <div className="page__body pl-5 pr-5">
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </div>
                </div>
            </main>
        </>
    );

}

export default App;
