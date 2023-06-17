import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedAuthRouteElement = ({ children }) => {
    const { user } = useSelector(store => store.auth);

    if (user) {
        return <Navigate to='/' replace/>
    }

    return children;
}

export default ProtectedAuthRouteElement;