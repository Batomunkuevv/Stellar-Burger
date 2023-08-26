import { FC, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "../../hooks/redux-hooks";
import { getIngredients } from "../../services/ingredients/actions";
import { checkUserAuth } from "../../services/user/actions";

import ProtectedRouteElement from "../../hocs/protected-route-element";
import Layout from "../layout/layout";
import Pages from "../../pages";
import UserInfo from "../user-info/user-info";
import UserOrders from "../user-orders.jsx/user-orders";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
        dispatch(checkUserAuth());
    }, [dispatch]);

    const ModalSwitch = () => {
        const location = useLocation();
        const navigate = useNavigate();
        let from: string = location.state?.from;

        const handleModalClose = () => {
            document.body.classList.remove("lock");
            navigate(-1);
        };

        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Pages.main />} />
                    <Route
                        path="login"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <Pages.login />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <Pages.register />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="forgot-password"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <Pages.forgotPassword />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="reset-password"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <Pages.resetPassword />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="profile"
                        element={
                            <ProtectedRouteElement>
                                <Pages.profile />
                            </ProtectedRouteElement>
                        }
                    >
                        <Route index element={<UserInfo />} />
                        <Route
                            path="orders"
                            element={
                                <ProtectedRouteElement>
                                    <UserOrders />
                                </ProtectedRouteElement>
                            }
                        />
                    </Route>
                    <Route path="feed" element={<Pages.feed />}></Route>
                    <Route path="*" element={<Pages.notFound404 />} />

                    {from ? (
                        <Route
                            path="ingredients/:ingredientId"
                            element={
                                <Modal onClose={handleModalClose} modalTitle="Детали ингредиента">
                                    <IngredientDetails />
                                </Modal>
                            }
                        />
                    ) : (
                        <Route path="ingredients/:ingredientId" element={<IngredientDetails />} />
                    )}

                    {from ? (
                        <Route
                            path="/profile/orders/:orderId"
                            element={
                                <ProtectedRouteElement>
                                    <Modal onClose={handleModalClose} type="order">
                                        <OrderDetails inModal />
                                    </Modal>
                                </ProtectedRouteElement>
                            }
                        />
                    ) : (
                        <Route
                            path="/profile/orders/:orderId"
                            element={
                                <ProtectedRouteElement>
                                    <Pages.order />
                                </ProtectedRouteElement>
                            }
                        ></Route>
                    )}

                    {from ? (
                        <Route
                            path="feed/:orderId"
                            element={
                                <Modal onClose={handleModalClose} type="order">
                                    <OrderDetails inModal />
                                </Modal>
                            }
                        />
                    ) : (
                        <Route path="feed/:orderId" element={<Pages.order />} />
                    )}
                </Route>
            </Routes>
        );
    };

    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
};

export default App;
