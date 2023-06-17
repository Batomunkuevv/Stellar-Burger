import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteElement = ({ children }) => {
    const location = useLocation();
    const { user } = useSelector(store => store.auth);

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;
}

export default ProtectedRouteElement;