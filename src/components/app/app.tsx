import { FC, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import { getIngredients } from "../../services/ingredients/actions";
import { checkUserAuth } from "../../services/user/actions";
import { FeedWsTypes } from "../../services/feed";

import ProtectedRouteElement from "../../hocs/protected-route-element";
import Layout from "../layout/layout";
import pages from "../../pages";
import UserInfo from "../user-info/user-info";
import UserOrders from "../user-orders.jsx/user-orders";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { getCookie } from "../../utils/cookie";
import { UserOrdersWsTypes } from "../../services/user-orders";
import OrderDetails from "../order-details/order-details";

const App: FC = () => {
    const dispatch = useDispatch();
    const accessToken = getCookie("accessToken");

    useEffect(() => {
        dispatch(getIngredients());
        dispatch(checkUserAuth());
        dispatch({ type: FeedWsTypes.CONNECTION_START });
        if (accessToken) dispatch({ type: UserOrdersWsTypes.CONNECTION_START });
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
                    <Route index element={<pages.main />} />
                    <Route
                        path="login"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <pages.login />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <pages.register />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="forgot-password"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <pages.forgotPassword />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="reset-password"
                        element={
                            <ProtectedRouteElement onlyUnAuth>
                                <pages.resetPassword />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="profile"
                        element={
                            <ProtectedRouteElement>
                                <pages.profile />
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
                    <Route path="feed" element={<pages.feed />}></Route>
                    <Route path="*" element={<pages.notFound404 />} />

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
                                    <pages.order />
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
                        <Route path="feed/:orderId" element={<pages.order />} />
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
