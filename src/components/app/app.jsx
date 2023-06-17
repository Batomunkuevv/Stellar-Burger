import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { getUser } from '../../services/redux/user/actions';
import { useDispatch } from 'react-redux';

import ProtectedRouteElement from '../../hocs/protected-route-element';
import ProtectedAuthRouteElement from '../../hocs/protected-auth-route-element';
import Layout from '../layout/layout';
import pages from '../../pages';
import UserInfo from '../user-info/user-info';
import UserOrders from '../user-orders.jsx/user-orders';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = getCookie('accessToken');

        if (accessToken) dispatch(getUser());
    }, [dispatch])

    const ModalSwitch = () => {
        const location = useLocation();
        const navigate = useNavigate();
        let from = location.state?.from;

        const handleModalClose = () => {
            document.body.classList.remove('lock');
            navigate(-1);
        };

        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<pages.main />} />
                    <Route path='login' element={<ProtectedAuthRouteElement><pages.login /></ProtectedAuthRouteElement>} />
                    <Route path='register' element={<ProtectedAuthRouteElement><pages.register /></ProtectedAuthRouteElement>} />
                    <Route path='forgot-password' element={<ProtectedAuthRouteElement><pages.forgotPassword /></ProtectedAuthRouteElement>} />
                    <Route path='reset-password' element={<ProtectedAuthRouteElement><pages.resetPassword /></ProtectedAuthRouteElement>} />
                    <Route path='profile' element={<ProtectedRouteElement><pages.profile /></ProtectedRouteElement>} >
                        <Route index element={<UserInfo />} />
                        <Route path='orders' element={<ProtectedRouteElement><UserOrders /></ProtectedRouteElement>} />
                    </Route>
                    <Route path='*' element={<pages.notFound404 />} />

                    {from ? (
                        <Route
                            path='ingredients/:ingredientId'
                            element={
                                <Modal onClose={handleModalClose} modalTitle='Детали ингредиента'>
                                    <IngredientDetails />
                                </Modal>
                            }
                        />
                    ) : (
                        <Route path='ingredients/:ingredientId' element={<IngredientDetails />} />
                    )}
                    
                </Route>
            </Routes>
        );
    }

    return (
        <Router>
            <ModalSwitch />
        </Router>
    )

}

export default App;
