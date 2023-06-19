import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Preloader from "../components/preloader/preloader";

const ProtectedRouteElement = ({ onlyUnAuth = false, children}) => {
    const location = useLocation();
    const user = useSelector(store => store.user.data);
    const isAuthChecked = useSelector(store => store.user.isAuthChecked);

    if (!isAuthChecked) return <Preloader />

    if (onlyUnAuth && user) {
        const fromPage = location.state?.from || '/';

        return <Navigate to={fromPage} />
    }

    if (!onlyUnAuth && !user) {
        return (
            <Navigate to='/login' state={{ from: location.pathname }} />
        )
    }

    return children
}

export default ProtectedRouteElement;