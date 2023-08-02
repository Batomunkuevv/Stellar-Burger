import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Preloader from "../components/preloader/preloader";
import { getIsAuthChecked, getUser } from "../services/user/selectors";

// Types
import { TUser, TProtectedRoute } from "../types";

const ProtectedRouteElement: FC<TProtectedRoute> = ({ onlyUnAuth = false, children}) => {
    const location = useLocation();
    const user: TUser | null = useSelector(getUser);
    const isAuthChecked: boolean = useSelector(getIsAuthChecked);

    if (!isAuthChecked) return <Preloader />

    if (onlyUnAuth && user) {
        const fromPage: string = location.state?.from || '/';

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