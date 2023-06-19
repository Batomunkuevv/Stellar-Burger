import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Preloader from "../components/preloader/preloader";
import { getIsAuthChecked, getUser } from "../services/redux/user/selectors";

const ProtectedRouteElement = ({ onlyUnAuth = false, children}) => {
    const location = useLocation();
    const user = useSelector(getUser);
    const isAuthChecked = useSelector(getIsAuthChecked);

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